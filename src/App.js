import { useEffect, useState } from "react";
import GridArray from "./randomize";
import Grid from "./components/Grid/grid";
import Header from "./components/header/header";
import Moves from "./components/Moves/moves";
import Timer from "./components/Timer/timer";
import { GlobalStyle } from "./GlobalStyles";
import { Footer } from "./Footer.styles";
import Overlay from "./components/overlay/overlay";

const App = () => {
  const timeLimit = 120;
  const maxMoves = 30;
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
        setWin={setWin}
      ></Header>
      <Grid
        setWin={setWin}
        moves={moves}
        setMoves={setMoves}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        Board={Board}
        setBoard={setBoard}
        time={time}
      ></Grid>
      <Footer>
        <Timer
          setWin={setWin}
          setLoss={setLoss}
          time={time}
          setTime={setTime}
          win={win}
          loss={loss}
        ></Timer>
        <Moves
          moves={moves}
          setWin={setWin}
          setLoss={setLoss}
          maxMoves={maxMoves}
        ></Moves>
      </Footer>
      {(loss || win) && (
        <Overlay
          setIsVisible={setIsVisible}
          setMoves={setMoves}
          setTime={setTime}
          timeLimit={timeLimit}
          maxMoves={maxMoves}
          Board={Board}
          setBoard={setBoard}
          setLoss={setLoss}
          setWin={setWin}
          win={win}
          loss={loss}
          moves={moves}
          time={time}
        ></Overlay>
      )}

      <GlobalStyle></GlobalStyle>
    </>
  );
};

export default App;
