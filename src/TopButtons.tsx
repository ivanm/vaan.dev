import { Fragment } from "react";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "usehooks-ts";

const TopButtons = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "en");
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

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
          {language === "en" ? "English" : "Español"}
        </MenuButton>
        <MenuList fontSize={{ base: 12, sm: 15 }} minWidth="115px">
          <MenuItem onClick={() => changeLanguage("en")}>
            {language === "en" ? <b>English</b> : "English"}
          </MenuItem>
          <MenuItem onClick={() => changeLanguage("es")}>
            {language === "es" ? <b>Español</b> : "Español"}
          </MenuItem>
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
