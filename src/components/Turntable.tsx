import { useEffect, useRef } from "react";
import { DragHint } from "./Icons";
import { useT } from "./LangContext";

// Debug-Man 1.0 on its plinth: 120 pre-rendered frames, 3° apart (public/media/turn = 840×1120
// desktop set, public/media/turn-s = 600×800 phone set).
//
// - Exactly one frame is visible at a time: no cross-fade, so there is never a double image.
// - Two <img> elements double-buffer. The hidden one loads the next frame and is swapped in only
//   after decode() resolves, so a frame never shows blank or half-loaded. While a decode is in
//   flight, later requests collapse to the latest.
// - The poster (f000) stays up until all frames are downloaded and decoded; only then do drag,
//   keys and the intro turn start. Frames load once the page is idle.
// - One slow intro turn the first time the figure is in view, then stillness (no idle loop).
//   No intro turn with prefers-reduced-motion; drag and keys still work.
// - Pointer drag (mouse and touch; touch-action: pan-y keeps vertical page scroll), ←/→ turn
//   6° per press, Home returns to the first frame.
//
// Frame swapping is imperative on purpose: it runs per pointer event and must not re-render React.

const N = 120;
const BASE = `${process.env.PUBLIC_URL}/media`;
const frame = (dir: string, i: number) => `${dir}/f${String(i).padStart(3, "0")}.webp`;
// decode() settles when the image is ready to paint; errors (or no decode() support) just resolve.
const decoded = (im: HTMLImageElement) =>
  (typeof im.decode === "function" ? im.decode() : Promise.resolve()).catch(() => {});

export default function Turntable() {
  const t = useT();
  const stageRef = useRef<HTMLDivElement>(null);
  const aRef = useRef<HTMLImageElement>(null);
  const bRef = useRef<HTMLImageElement>(null);
  const hintRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const stage = stageRef.current!;
    const hint = hintRef.current!;
    let shown = aRef.current!;
    let spare = bRef.current!;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)");

    let disposed = false;
    let dir = `${BASE}/turn`;
    const frames: HTMLImageElement[] = new Array(N);
    let ready = false;
    let pos = 0;
    let cur = 0;
    let want = 0;
    let busy = false;
    const idx = (p: number) => ((Math.round(p) % N) + N) % N;

    function show(i: number) {
      want = i;
      if (busy || i === cur || disposed) return;
      busy = true;
      const k = want;
      spare.removeAttribute("srcset");
      spare.src = frames[k].src;
      decoded(spare).then(() => {
        if (disposed) return;
        spare.style.visibility = "visible";
        shown.style.visibility = "hidden";
        [shown, spare] = [spare, shown];
        cur = k;
        busy = false;
        if (want !== cur) show(want);
      });
    }
    const paint = (p: number) => {
      if (ready) show(idx(p));
    };

    // One slow turn the first time the figure is in view, then stillness.
    let raf = 0;
    let dragging = false;
    let io: IntersectionObserver | undefined;
    function present() {
      if (typeof IntersectionObserver === "undefined") return;
      io = new IntersectionObserver(
        ([e]) => {
          if (!e.isIntersecting) return;
          io?.disconnect();
          const t0 = performance.now();
          const dur = 5200;
          const from = pos;
          const ease = (x: number) => 1 - Math.pow(1 - x, 3);
          const step = (now: number) => {
            if (dragging || disposed) return;
            const x = Math.min(1, (now - t0) / dur);
            pos = from + N * ease(x);
            paint(pos);
            if (x < 1) raf = requestAnimationFrame(step);
            else pos = Math.round(pos) % N;
          };
          raf = requestAnimationFrame(step);
        },
        { threshold: 0.4 }
      );
      io.observe(stage);
    }

    function onReady() {
      if (disposed) return;
      ready = true;
      stage.dataset.ready = "1";
      hint.classList.add("on");
      if (!reduce?.matches) present();
    }

    // Follow whichever set the browser picked for the poster (600 px set on phones, 840 px on desktop).
    function preload() {
      if (disposed) return;
      if (/turn-s\//.test(shown.currentSrc || "")) dir = `${BASE}/turn-s`;
      const jobs: Promise<unknown>[] = [];
      for (let i = 0; i < N; i++) {
        const im = new Image();
        im.decoding = "async";
        im.src = frame(dir, i);
        frames[i] = im;
        jobs.push(decoded(im));
      }
      Promise.all(jobs).then(onReady);
    }

    // The frames are rendered mirrored, so a lower frame index turns the figure's front to the
    // right: dragging right lowers pos, and the surface under the pointer follows it.
    let x0 = 0;
    let p0 = 0;
    let moved = false;
    const perPx = () => N / Math.max(320, stage.clientWidth * 1.6);
    const onDown = (e: PointerEvent) => {
      if (!ready) return;
      dragging = true;
      moved = false;
      cancelAnimationFrame(raf);
      x0 = e.clientX;
      p0 = pos;
      stage.setPointerCapture(e.pointerId);
      stage.classList.add("dragging");
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - x0;
      if (Math.abs(dx) > 3) moved = true;
      pos = p0 - dx * perPx();
      paint(pos);
    };
    const onEnd = () => {
      if (!dragging) return;
      dragging = false;
      pos = Math.round(pos);
      stage.classList.remove("dragging");
      if (moved) hint.classList.remove("on");
    };
    // Keys: 2 frames (6°) per press; Home returns to the first frame.
    const onKey = (e: KeyboardEvent) => {
      if (!ready) return;
      if (e.key === "Home") {
        e.preventDefault();
        cancelAnimationFrame(raf);
        pos = 0;
        paint(pos);
        return;
      }
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault();
      cancelAnimationFrame(raf);
      pos = Math.round(pos) + (e.key === "ArrowRight" ? -2 : 2);
      paint(pos);
    };

    stage.addEventListener("pointerdown", onDown);
    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerup", onEnd);
    stage.addEventListener("pointercancel", onEnd);
    stage.addEventListener("keydown", onKey);

    // Frames load once the page is idle, so the poster is the only hero cost.
    let idleId = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const kick = () => {
      if (disposed) return;
      if (typeof window.requestIdleCallback === "function") idleId = window.requestIdleCallback(preload, { timeout: 1500 });
      else timer = setTimeout(preload, 600);
    };
    if (document.readyState === "complete") kick();
    else window.addEventListener("load", kick, { once: true });

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      io?.disconnect();
      if (idleId) window.cancelIdleCallback?.(idleId);
      clearTimeout(timer);
      window.removeEventListener("load", kick);
      stage.removeEventListener("pointerdown", onDown);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerup", onEnd);
      stage.removeEventListener("pointercancel", onEnd);
      stage.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <figure className="show">
      <div
        className="stage"
        ref={stageRef}
        tabIndex={0}
        role="img"
        aria-roledescription={t("hero.roledesc")}
        aria-label={t("hero.figureLabel")}
      >
        <img
          className="a"
          ref={aRef}
          src={frame(`${BASE}/turn`, 0)}
          srcSet={`${frame(`${BASE}/turn-s`, 0)} 600w, ${frame(`${BASE}/turn`, 0)} 840w`}
          sizes="(max-width: 860px) 200px, 600px"
          width={840}
          height={1120}
          alt=""
          draggable={false}
          {...{ fetchpriority: "high" }}
        />
        <img className="b" ref={bRef} width={840} height={1120} alt="" draggable={false} />
      </div>
      <figcaption className="credit">
        <span>{t("hero.credit")}</span>
        <span className="hint" ref={hintRef} aria-hidden="true">
          <DragHint />
          {t("hero.hint")}
        </span>
      </figcaption>
    </figure>
  );
}
