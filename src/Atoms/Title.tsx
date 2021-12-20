import React from "react";

interface TitleProps {
  size?: TitleSize;
  title: string;
}

export type TitleSize = "small" | "middle" | "large";

export const Title: React.FC<TitleProps> = ({ size = "small", title }) => {
  return <p className={size}>{title}</p>;
};
