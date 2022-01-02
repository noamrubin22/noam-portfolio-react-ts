import React from "react";
import { Icon } from "../Atoms/Icon/Icon";
import { Title } from "../Atoms/Title";

interface MenuItemProps {
  src: string;
  title: string;
  size: "small" | "middle";
}

export const MenuItem: React.FC<MenuItemProps> = ({
  src,
  title,
  size = "middle",
}) => {
  return (
    <div style={{ display: "flex", backgroundColor: "gray" }}>
      <Icon src={src} size={size} />
      <Title title={title} size={size} />
    </div>
  );
};
