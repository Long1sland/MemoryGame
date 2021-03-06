import React, { useEffect } from "react";
import { Content, Wrapper } from "./timer.styles";

const Timer = ({ setLoss, time, setTime, win, loss, howToPlay }) => {
 
  
  useEffect(() => {
    if (time === 0) {
      setLoss(true);
      return;
    }
    if (win || loss || howToPlay){
     
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
  }, [time, howToPlay, loss, win]);

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
