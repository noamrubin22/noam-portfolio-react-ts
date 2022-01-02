import React from "react";
import styles from "./icon.module.scss";
import clsx from "clsx";

interface IconProps {
  size?: IconSize;
  src: string;
}

export type IconSize = "small" | "middle" | "large" | "horizontal";

export const Icon: React.FC<IconProps> = ({ size = "small", src }) => {
  return <img src={src} className={clsx(styles.icon, styles[size])} alt="" />;
};
