import React from "react";
import { Icon } from "../Atoms/Icon";
import { Title } from "../Atoms/Title";

interface DesktopBtnProps {
  src: string;
  title: string;
}

export const DesktopBtn: React.FC<DesktopBtnProps> = ({ src, title }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Icon src={src} size="large" />
      <Title title={title} size="middle" />
    </div>
  );
};
