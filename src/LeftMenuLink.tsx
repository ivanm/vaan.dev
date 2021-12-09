import { Flex, Link, useColorMode } from "@chakra-ui/react";
import { Link as ReachLink } from "@reach/router";

interface LeftMenuLinkProps {
  to: string;
  children: React.ReactNode;
  location: Location;
}

const LeftMenuLink = ({ to, children, location }: LeftMenuLinkProps) => {
  const { colorMode } = useColorMode();
  const isCurrent = location.pathname === to;
  return (
    <Flex>
      {isCurrent ? (
        <Flex align="center" fontSize="10" mb={7} mr={2}>
          ᐅ
        </Flex>
      ) : null}
      <Link
        as={ReachLink}
        to={to}
        color={
          isCurrent ? (colorMode === "dark" ? "white" : "black") : undefined
        }
        mb={6}
        ml={isCurrent ? 0 : 4}
      >
        {children}
      </Link>
    </Flex>
  );
};
export default LeftMenuLink;
