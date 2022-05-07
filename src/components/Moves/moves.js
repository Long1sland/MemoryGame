import React, { useEffect } from "react";
import { Content, Wrapper } from "./moves.styles";

const Moves = ({ moves, setLoss, maxMoves }) => {
  useEffect(() => {
    if (moves === maxMoves) {
      setLoss(true);
    }
  }, [moves]);

  return (
    <Wrapper>
      <Content>
        <div>Moves</div>
        <div>{moves}</div>
      </Content>
    </Wrapper>
  );
};

export default React.memo(Moves);
