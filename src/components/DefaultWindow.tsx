import React from "react";
import {
  WindowHeader,
  Button,
  Toolbar,
  WindowContent,
  Frame,
  Window,
} from "react95";

const DefaultWindow = () => {
  return (
    <>
      <Window resizable className="window">
        <WindowHeader className="window-title">
          <span>react95.exe</span>
        </WindowHeader>
        <Toolbar>
          <Button variant="menu" size="sm">
            File
          </Button>
          <Button variant="menu" size="sm">
            Edit
          </Button>
          <Button variant="menu" size="sm" disabled>
            Save
          </Button>
        </Toolbar>
        <WindowContent>
          <p>Hi I am Nusha. I am .</p>
          <p>I am doing my best the create a positive change.</p>
        </WindowContent>
        <Frame variant="well" className="footer">
          It's not always working
        </Frame>
      </Window>
    </>
  );
};

export default DefaultWindow;
