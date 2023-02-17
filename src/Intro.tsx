import { Box, Text } from "@chakra-ui/react";
import { useTranslation, Trans } from "react-i18next";

const Intro = () => {
  useTranslation();
  return (
    <Box w="100%">
      <Text fontSize={18} mb={4}>
        <Trans i18nKey="intro.greeting">About me:</Trans>
      </Text>
      <Text mb={4}>
        <Trans i18nKey="intro.text1">
          I'm <b>Ivan Mayoral</b>, a <b>Senior Software Engineer</b> with eleven
          years of professional experience in Computer Science, specializing in
          Front-End Development <b>(Vue+React)</b>. I am passionate about
          creating intuitive UI interfaces that are easy to use without
          sacrificing efficiency.
        </Trans>
      </Text>
      <Text mb={4}>
        <Trans i18nKey="intro.text2">
          I have participated in diverse industries, including <b>education</b>,
          <b>advertising</b>, and <b>healthcare</b>. For the last nine years, I
          have worked as a contractor for US Tech Companies, leveraging
          problem-solving skills to deliver solutions that meet client needs and
          make users happy.
        </Trans>
      </Text>
      <Text mb={4}>
        <Trans i18nKey="intro.text3">
          My experience in <b>Back-End</b> development enables me to work with
          many types of teams and provide seamless integrations between API and
          Front-End with frictionless high-level solutions.
        </Trans>
      </Text>
      <Text mb={4}>
        <Trans i18nKey="intro.text4">
          I enjoy working in <b>innovative</b> and <b>collaborative</b>
          environments where ideas are shared and everyone's input is valued. I
          am motivated to continue expanding my skills and contribute to making
          a better world with code.
        </Trans>
      </Text>
    </Box>
  );
};
export default Intro;
