import { FC } from "react";
import { Flex, Link, useColorMode } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { BsPerson } from "@react-icons/all-files/bs/BsPerson";
import { BsPersonFill } from "@react-icons/all-files/bs/BsPersonFill";
import { IoCubeOutline } from "@react-icons/all-files/io5/IoCubeOutline";
import { IoCubeSharp } from "@react-icons/all-files/io5/IoCubeSharp";
import { IoChatbubbleEllipsesOutline } from "@react-icons/all-files/io5/IoChatbubbleEllipsesOutline";
import { IoChatbubbleEllipsesSharp } from "@react-icons/all-files/io5/IoChatbubbleEllipsesSharp";
import { BsBriefcaseFill } from "@react-icons/all-files/bs/BsBriefcaseFill";
import { BsBriefcase } from "@react-icons/all-files/bs/BsBriefcase";
import { useLocation } from 'react-router-dom';

interface LeftMenuLinkProps {
  to: string;
  children: React.ReactNode;
}

const LeftMenuLink = ({ to, children, }: LeftMenuLinkProps) => {
  const location = useLocation();
  const { colorMode } = useColorMode();
  const isCurrent = location.pathname === to;
  const iconSize: number = 15;

  let Icon: FC = () => null;
  switch (to) {
    case "/":
      Icon = () =>
        isCurrent ? (
          <BsPersonFill size={iconSize} />
        ) : (
          <BsPerson size={iconSize} />
        );
      break;
    case "/resume":
      Icon = () =>
        isCurrent ? (
          <BsBriefcaseFill size={iconSize} />
        ) : (
          <BsBriefcase size={iconSize} />
        );
      break;
    case "/projects":
      Icon = () =>
        isCurrent ? (
          <IoCubeSharp size={iconSize} />
        ) : (
          <IoCubeOutline size={iconSize} />
        );
      break;
    case "/contact":
      Icon = () =>
        isCurrent ? (
          <IoChatbubbleEllipsesSharp size={iconSize} />
        ) : (
          <IoChatbubbleEllipsesOutline size={iconSize} />
        );
      break;
  }

  return (
    <Flex>
      <Flex align="center" fontSize="10" mb={5} mr={2}>
        <Icon />
      </Flex>
      <Link
        as={ReachLink}
        to={to}
        color={
          isCurrent ? (colorMode === "dark" ? "white" : "black") : undefined
        }
        mb={5}
        ml={0}
      >
        {children}
      </Link>
    </Flex>
  );
};
export default LeftMenuLink;
