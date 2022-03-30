import React, { useEffect } from "react";
import { Content, Wrapper } from "./moves.styles";

const Moves = ({ moves, setLoss, maxMoves }) => {
  if (moves === maxMoves) {
    setLoss(true);
  }
  return (
    <Wrapper>
      <Content>
        <div>Moves</div>
        <div>{moves}</div>
      </Content>
    </Wrapper>
  );
};

export default Moves;
