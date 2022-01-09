import clsx from "clsx";
import React from "react";
import { Icon } from "../../Atoms/Icon/Icon";
import { Title } from "../../Atoms/Title/Title";
import styles from "./startbtn.module.scss";

interface StartBtnProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

export const StartBtn: React.FC<StartBtnProps> = ({ setIsOpen, isOpen }) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className={clsx(styles.start__button, { [styles.pseudo]: isOpen })}
      onClick={handleClick}
    >
      <Icon src={"start-logo.png"} size="horizontal" alt="Start button" />
      <Title title="Start" size="start__button" />
    </button>
  );
};
