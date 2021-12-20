import React, { useState } from "react";
import { Icon } from "../Atoms/Icon";
import { Title } from "../Atoms/Title";

interface StartBtnProps {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

export const StartBtn: React.FC<StartBtnProps> = ({ setIsOpen, isOpen }) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <button
      style={{ display: "flex", alignContent: "center", alignItems: "center" }}
      onClick={handleClick}
    >
      <Icon src={"tibet_robot_01_small.png"} size="small" />
      <Title title="Start" size="small" />
    </button>
  );
};
