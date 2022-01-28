import React from "react";
import { ProjectWindow } from "./ProjectWindow/ProjectWindow";

interface MonitorProps {}

export const Monitor: React.FC<MonitorProps> = ({}) => {
  return (
    <div
      style={{ backgroundColor: "lightblue", height: "100vh", width: "100vw" }}
    >
      <ProjectWindow />
      <img src="/thegarden.jpg" alt="the garden" height="100%" width="100%" />
    </div>
  );
};
