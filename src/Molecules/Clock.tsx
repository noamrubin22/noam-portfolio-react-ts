import React, { useEffect, useState } from "react";
import { Icon } from "../Atoms/Icon";
import { Title } from "../Atoms/Title";

export const Clock: React.FC = () => {
  const [time, setTime] = useState<string>("00:00");

  const updateTime = () => {
    console.log("useEffect");
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let convertedHours;
    let suffix = "";
    let newMinutes;

    if (hours >= 12) {
      suffix = " PM";
      convertedHours = hours % 12;
    } else {
      suffix = " AM";
      convertedHours = hours;
    }

    if (minutes % 10 == 0) {
      newMinutes = minutes.toString() + "0";
      console.log(newMinutes);
    } else if (minutes < 10) {
      newMinutes = "0" + minutes.toString();
      console.log(newMinutes);
    }

    setTime(convertedHours + ":" + newMinutes + suffix);
  };

  useEffect(() => {
    console.log("TIME", time);
  }, [time]);

  return (
    <div
      style={{
        display: "flex",
        width: "7rem",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Icon src={"about_01_small.png"} size="small" />
      <Title title={time} size="small" />
    </div>
  );
};
