import React from "react";
import { WindowContent, ScrollView, Window } from "react95";

const ScrollWindow = () => {
  return (
    <Window>
      <WindowContent>
        <ScrollView style={{ width: "300px", height: "200px" }}>
          <div>
            <p style={{ width: 400 }}>Hey, my name is Nusha. ✿</p>
            <p>I am a dev (full stack).</p>
            <p>
              I like to combine the old with the new: nostalgia with innovation.
              Feeling with intellect.
            </p>
            <p>A futuristic nineties kid.</p>
            <p>
              I feel the best when I can be creative and learn new things.
              That's why I am happy to work in web3.
            </p>
            <p>I hope to bring a positive change into the space.</p>
          </div>
        </ScrollView>
      </WindowContent>
    </Window>
  );
};

export default ScrollWindow;
