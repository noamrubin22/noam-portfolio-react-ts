import React from "react";
import { MenuItem } from "../../Molecules/MenuItem/MenuItem";
import styles from "./startmenu.module.scss";

export const StartMenu: React.FC = () => {
  return (
    <div className={styles.start__menu}>
      <MenuItem src="./about_01.png" title={"Projects"} />
      <MenuItem src="./settings.png" title={"Settings"} />
      <MenuItem src="./about_01.png" title={"About"} />
      <MenuItem src="./contact.png" title={"Contact"} />
      <MenuItem src="./shutdown.png" title={"Shut Down"} />
    </div>
  );
};
