import React, { useState } from "react";
import { Icon } from "../../Atoms/Icon/Icon";
import { Title } from "../../Atoms/Title/Title";
import styles from "./menuitem.module.scss";

interface MenuItemProps {
  src: string;
  title: string;
  size?: "small" | "middle";
  setSubMenuIsOpen?: (subMenuIsOpen: boolean) => void;
  onClick?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  src,
  title,
  size = "middle",
  children,
}) => {
  const [subMenuIsOpen, setSubMenuIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    if (setSubMenuIsOpen && children) {
      setSubMenuIsOpen(!subMenuIsOpen);
    }
  };

  return (
    <div className={styles.item}>
      <button className={styles.button} onClick={handleClick}>
        <Icon src={src} size={size} alt={title} />
        <Title title={title} size={size} />
        {children && <div className={styles.arrow}></div>}
      </button>
      {children && (
        <div className={styles.submenu}>{subMenuIsOpen && children}</div>
      )}
    </div>
  );
};
