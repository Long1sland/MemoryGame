import { useEffect, useState } from "react";
import GridArray from "./randomize";
import Grid from "./components/Grid/grid";
import Header from "./components/header/header";
import Moves from "./components/Moves/moves";
import Timer from "./components/Timer/timer";
import { GlobalStyle } from "./GlobalStyles";
import { Footer } from "./Footer.styles";

const App = () => {
  const timeLimit = 120;
  const maxMoves = 15;
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(timeLimit);
  const [win, setWin] = useState(false);
  const [loss, setLoss] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [Board, setBoard] = useState(GridArray);
  console.log(moves);
  console.log(isVisible);
  return (
    <>
      <Header
        setIsVisible={setIsVisible}
        setMoves={setMoves}
        setTime={setTime}
        timeLimit={timeLimit}
        maxMoves={maxMoves}
        Board={Board}
        setBoard={setBoard}
        setLoss={setLoss}
      ></Header>
      <Grid
        moves={moves}
        setMoves={setMoves}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        Board={Board}
        setBoard={setBoard}
      ></Grid>
      <Footer>
        <Timer
          setWin={setWin}
          setLoss={setLoss}
          time={time}
          setTime={setTime}
        ></Timer>
        <Moves
          moves={moves}
          setWin={setWin}
          setLoss={setLoss}
          maxMoves={maxMoves}
        ></Moves>
      </Footer>
      {loss && <div>you loose!!!!</div>}

      <GlobalStyle></GlobalStyle>
    </>
  );
};

export default App;
