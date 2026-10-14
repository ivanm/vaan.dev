// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom"

// jsdom does not implement scrolling; the route shell scrolls on navigation.
window.scrollTo = jest.fn() as unknown as typeof window.scrollTo;
Element.prototype.scrollIntoView = jest.fn();
