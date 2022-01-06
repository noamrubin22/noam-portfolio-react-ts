import React from "react";
import { Icon } from "../../Atoms/Icon/Icon";
import { Title } from "../../Atoms/Title/Title";
import styles from "./menuitem.module.scss";

interface MenuItemProps {
  src: string;
  title: string;
  size?: "small" | "middle";
}

export const MenuItem: React.FC<MenuItemProps> = ({
  src,
  title,
  size = "middle",
}) => {
  return (
    <div className={styles.menu__item}>
      <Icon src={src} size={"middle"} alt={title} />
      <Title title={title} size={size} />
    </div>
  );
};
