import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../Atoms/Icon";

export const SocialMediaBtns: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "10rem",
      }}
    >
      {/* <Link to="/"> */}
      <Icon src={"/contact_01_small.png"} size="small" />
      {/* </Link> */}
      {/* <Link to="/"> */}
      <Icon src={"/contact_01_small.png"} size="small" />
      {/* </Link> */}
      {/* <Link to="/"> */}
      <Icon src={"/contact_01_small.png"} size="small" />
      {/* </Link> */}
    </div>
  );
};
