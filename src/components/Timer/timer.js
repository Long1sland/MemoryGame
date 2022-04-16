import React, { Component, useState, useEffect } from "react";
import { Content, Wrapper } from "./timer.styles";

const Timer = ({ setWin, setLoss, time, setTime, win, loss }) => {
  useEffect(() => {
    if (time == 0) {
      setLoss(true);
      return;
    }
    if (win || loss) {
      return;
    } else {
      const interval = setInterval(
        () => {
          setTime((prev) => {
            return prev - 1;
          });
        },

        1000
      );
      return () => clearInterval(interval);
    }
  });

  return (
    <Wrapper>
      <Content>
        <div>Time</div>
        <div>{`${Math.floor(time / 60)}:${
          time % 60 < 10 ? "0" + `${time % 60}` : `${time % 60}`
        }`}</div>
      </Content>
    </Wrapper>
  );
};

export default Timer;
