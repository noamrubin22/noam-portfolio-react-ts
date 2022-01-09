import React from "react";
import styles from "./startsubmenu.module.scss";
import clsx from "clsx";

export type TitleSize = "small" | "middle" | "large" | "start__button";

export const StartSubMenu: React.FC = () => {
  return <p className={clsx(styles)}></p>;
};
