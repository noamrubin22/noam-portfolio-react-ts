import React from "react";
import { Monitor } from "../Organisms/Monitor";
import { StartBar } from "../Organisms/StartBar/StartBar";

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
  return (
    <div style={{ display: "flex" }}>
      <Monitor />
      <StartBar />
    </div>
  );
};
