import React, { useState } from "react";
import { Clock } from "../../Molecules/Clock/Clock";
import { SocialMediaBtns } from "../../Molecules/SocialMediaBtns/SocialMediaBtns";
import { StartBtn } from "../../Molecules/StartBtn/StartBtn";
import { StartMenu } from "../StartMenu/StartMenu";
import styles from "./startbar.module.scss";

export const StartBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className={styles.start}>
      <div className={styles.tasks}>
        <div className={styles.start__button}>
          <StartBtn setIsOpen={setIsOpen} isOpen={isOpen} />
          {isOpen && <StartMenu />}
        </div>
        <SocialMediaBtns />
        <Clock />
      </div>
    </div>
  );
};
