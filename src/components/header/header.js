import React, { Component } from "react";
import { Content, Wrapper } from "./header.styles";
import GridArray from "../../randomize";
import { signOut } from "firebase/auth";

const Header = ({
  setIsVisible,
  setTime,
  setMoves,
  timeLimit,
  setBoard,
  setLoss,
  setWin,
  auth,
}) => {
  console.log("i'm the header");
  const handleClick = () => {
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
          id="sign-out"
          onClick={() => {
            signOut(auth);
          }}
        >
          Sign Out
        </button>
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

export default React.memo(Header);
