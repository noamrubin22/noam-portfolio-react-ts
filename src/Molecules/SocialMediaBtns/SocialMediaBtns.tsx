import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../../Atoms/Icon/Icon";
import styles from "./socialmediabtns.module.scss";

export const SocialMediaBtns: React.FC = () => {
  return (
    <div className={styles.social_media__buttons}>
      <div className={styles.social_media__sidebar}></div>
      <Link target="_blank" to="https://github.com/noamrubin22">
        <img src={"github.png"} className={styles.icon_small} alt={"Github"} />
      </Link>
      <Link target="_blank" to="www.linkedin.com/in/noam-rubin">
        <img
          src={"linked-in.png"}
          className={styles.icon_small}
          alt={"LinkedIn"}
        />
      </Link>
      <Link to="mailto:noamru22@gmail.com">
        <img src={"email.png"} className={styles.icon_small} alt={"Mail"} />
      </Link>
      <div className={styles.social_media__sidebar} />
    </div>
  );
};
