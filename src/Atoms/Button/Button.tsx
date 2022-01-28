import React from "react";
import styles from "./button.module.scss";

interface ButtonProps {
  type: string;
}

export const Button: React.FC<ButtonProps> = ({ type }) => {
  return (
    <div className={styles.container}>
      <button>
        <div className={styles[type]}></div>
      </button>
    </div>
  );
};
