import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../Atoms/Icon/Icon";

export const SocialMediaBtns: React.FC = () => {
  return (
    <div className="buttons-social-media">
      <Link target="_blank" to="https://github.com/noamrubin22">
        <Icon src={"github.png"} size="small" />
      </Link>
      <Link target="_blank" to="https://www.linkedin.com/in/noam-rubin">
        <Icon src={"linked-in.png"} size="small" />
      </Link>
      {/* <Link to="/"> */}
      <Icon src={"email.png"} size="small" />
      {/* </Link> */}
    </div>
  );
};
