import React, { useState } from "react";
import { Clock } from "../Molecules/Clock";
import { MenuItem } from "../Molecules/MenuItem";
import { SocialMediaBtns } from "../Molecules/SocialMediaBtns";
import { StartBtn } from "../Molecules/StartBtn";

export const StartBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "4rem",
        backgroundColor: "gray",
        position: "absolute",
        bottom: 0,
        left: 0,
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignContent: "center",
          width: "30rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            bottom: 0,
            left: 0,
          }}
        >
          <div>
            {isOpen && (
              <>
                <MenuItem
                  src={"tibet_robot_01_small.png"}
                  title="Projects"
                  size="middle"
                />
                <MenuItem
                  src={"tibet_robot_01_small.png"}
                  title="Tibetan Singing Robot"
                  size="middle"
                />
                <MenuItem
                  src={"tibet_robot_01_small.png"}
                  title="Tibetan Singing Robot"
                  size="middle"
                />
              </>
            )}
          </div>
          <StartBtn setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
        <SocialMediaBtns />
      </div>
      <div
        style={{
          display: "flex",
          width: "7rem",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Clock />
      </div>
    </div>
  );
};
