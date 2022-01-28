import React from "react";
import { Button } from "../../Atoms/Button/Button";
import styles from "./windowtitlebar.module.scss";

interface WindowTitleBarProps {
  projectDescription: string;
}

export const WindowTitleBar: React.FC<WindowTitleBarProps> = ({
  projectDescription,
}) => {
  return (
    <div className={styles.container}>
      <p>{projectDescription}</p>
      <div className={styles.buttons}>
        <Button type={"minimize"} />
        <Button type={"exit"} />
        <Button type={"maximize"} />
      </div>
    </div>
  );
};
