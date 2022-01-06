import React from "react";
import { MenuItem } from "../../Molecules/MenuItem/MenuItem";
import styles from "./startmenu.module.scss";

export const StartMenu: React.FC = () => {
  return (
    <div className={styles.start__menu}>
      <div className={styles.start__menu_side}>
        <p id={styles.windows_95}>Windows 95</p>
      </div>
      <div className={styles.start__menu_items}>
        <MenuItem src="./projects-icon.png" title={"Projects"} />
        <MenuItem src="./settings.png" title={"Settings"} />
        <MenuItem src="./about_01.png" title={"About"} />
        <MenuItem src="./contact.png" title={"Contact"} />
        <div className={styles.start__menu_divider}>
          <MenuItem src="./shutdown.png" title={"Shut Down"} />
        </div>
      </div>
    </div>
  );
};
