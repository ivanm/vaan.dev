import { Fragment } from "react";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

const TopButtons = () => {
  return (
    <Fragment>
      <Menu>
        <MenuButton
          size="sm"
          variant="ghost"
          as={Button}
          fontSize={{ base: 12, sm: 15 }}
          rightIcon={<ChevronDownIcon />}
        >
          English
        </MenuButton>
        <MenuList fontSize={{ base: 12, sm: 15 }} minWidth="115px">
          <MenuItem>English</MenuItem>
          <MenuItem onClick={() => alert("Kagebunshin")}>Spanish</MenuItem>
        </MenuList>
      </Menu>
      <ColorModeSwitcher
        fontSize={{ base: 12, sm: 15 }}
        size="sm"
        justifySelf="flex-end"
      />
    </Fragment>
  );
};
export default TopButtons;
