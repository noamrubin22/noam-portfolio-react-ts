import React, { useEffect } from "react";
import { Icon } from "../../Atoms/Icon/Icon";
import { Title } from "../../Atoms/Title/Title";
import { StartMenu } from "../../Organisms/StartMenu/StartMenu";
import styles from "./startbtn.module.scss";

interface StartBtnProps {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

export const StartBtn: React.FC<StartBtnProps> = ({ setIsOpen, isOpen }) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <button className={styles.start__button} onClick={handleClick}>
      {isOpen && <StartMenu />}
      <Icon src={"start-logo.png"} size="horizontal" alt="Start button" />
      <Title title="Start" size="start__button" />
    </button>
  );
};
