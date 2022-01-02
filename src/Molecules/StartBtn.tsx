import React, { useEffect } from "react";
import { Icon } from "../Atoms/Icon/Icon";
import { Title } from "../Atoms/Title";

interface StartBtnProps {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

export const StartBtn: React.FC<StartBtnProps> = ({ setIsOpen, isOpen }) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const body = document.getElementById("body");
    body?.addEventListener("click", () => {
      setIsOpen(false);
      console.log("startbtn should close");
    });
  });

  return (
    <button
      style={{ display: "flex", alignContent: "center", alignItems: "center" }}
      onClick={handleClick}
    >
      <Icon src={"start-logo.png"} size="horizontal" />
      <Title title="Start" size="small" />
    </button>
  );
};
