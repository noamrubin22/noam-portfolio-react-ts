import React from "react";
import styles from "./projectwindow.module.scss";
import { WindowTitleBar } from "../../Molecules/WindowTitleBar/WindowTitleBar";

export const ProjectWindow: React.FC = () => {
  return (
    <div className={styles.container}>
      <WindowTitleBar projectDescription={"TryOut"} />
    </div>
  );
};
