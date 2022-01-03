import React from "react";
import styles from "./title.module.scss";
import clsx from "clsx";

interface TitleProps {
  size?: TitleSize;
  title: string;
}

export type TitleSize = "small" | "middle" | "large" | "start__button";

export const Title: React.FC<TitleProps> = ({ size = "small", title }) => {
  return <p className={clsx(styles[size])}>{title}</p>;
};
