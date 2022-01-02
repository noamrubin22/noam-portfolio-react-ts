import React, { useEffect, useState } from "react";
import { Icon } from "../../Atoms/Icon/Icon";
import { Title } from "../../Atoms/Title";
import styles from "./clock.module.scss";

export const Clock: React.FC = () => {
  const [time, setTime] = useState<string>("");

  const updateTime = () => {
    const today = new Date();
    const time = today.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    setTime(time);
  };

  useEffect(() => {
    setInterval(updateTime, 1000);
  }, []);

  return (
    <time className={styles.clock}>
      <Icon src={"volume_01.png"} size="small" alt="Volume" />
      <Title title={time} size="small" />
    </time>
  );
};
