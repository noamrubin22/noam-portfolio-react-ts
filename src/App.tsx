import React from "react";
import { MenuList, MenuListItem, Monitor, Separator } from "react95";
import { ThemeProvider } from "styled-components";

/* Pick a theme of your choice */
import original from "react95/dist/themes/original";
import DefaultWindow from "./components/DefaultWindow";
import ScrollWindow from "./components/ScrollWindow";

const App = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    <ThemeProvider theme={original}>
      <div>
        <MenuList>
          <MenuListItem primary size="sm">
            Home
          </MenuListItem>
          <Separator />
          <MenuListItem size="sm">About me</MenuListItem>
          <MenuListItem size="sm">Projects</MenuListItem>
          <MenuListItem size="sm">Contact</MenuListItem>
          <Separator />
          <MenuListItem size="sm">Some bullshit</MenuListItem>
        </MenuList>
      </div>
      <div style={{ width: "20vw", margin: "5rem" }}>
        <ScrollWindow />
      </div>
      <div>
        <MenuList>
          <MenuListItem square>
            <span role="img" aria-label="🐦">
              🐦
            </span>
          </MenuListItem>
          <MenuListItem square>
            <span role="img" aria-label="🤖">
              👂
            </span>
          </MenuListItem>
          <MenuListItem square>
            <span role="img" aria-label="🎁">
              🎁
            </span>
          </MenuListItem>
        </MenuList>
      </div>
    </ThemeProvider>
  </div>
);

export default App;
