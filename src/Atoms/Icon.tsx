import React from "react";

interface IconProps {
  size?: IconSize;
  src: string;
}

export type IconSize = "small" | "middle" | "large";

export const Icon: React.FC<IconProps> = ({ size = "small", src }) => {
  return <img src={src} className={size} />;
};
