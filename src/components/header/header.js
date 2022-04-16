import React, { Component } from "react";
import { Content, Wrapper } from "./header.styles";
import GridArray from "../../randomize";

const Header = ({
  setIsVisible,
  setTime,
  setMoves,
  timeLimit,
  Board,
  setBoard,
  setLoss,
  setWin,
}) => {
  const handleClick = () => {
    console.log("clicked");
    setLoss(false);
    setWin(false);
    setIsVisible(true);
    setTime(timeLimit);
    setMoves(0);
    setBoard((prev) => {
      prev.forEach((tile) => {
        tile.visible = false;
        tile.correct = false;
      });
      return prev;
    });
  };
  return (
    <Wrapper>
      <div id="Title">Memory</div>
      <Content>
        {/*<button
          id="restart"
          onClick={() => {
            handleClick();
          }}
        >
          Restart
        </button>*/}
        <button
          id="new"
          onClick={() => {
            handleClick();
            setBoard(GridArray);
          }}
        >
          New Game
        </button>
      </Content>
    </Wrapper>
  );
};

export default Header;
