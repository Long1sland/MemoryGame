import { Backgound, Card } from "./overlay.styles";
import GameOver from "../GameOver/gameOver";
import HowToPlay from "../HowToPlay/howToPlay";

const Overlay = ({
  setIsVisible,
  setTime,
  setMoves,
  timeLimit,
  setBoard,
  setLoss,
  setWin,
  moves,
  time,
  win,
  loss,
  setHowToPlay,
  howToPlay,
  document,
  worldRecord
}) => {
  console.log(howToPlay, "this is me this is real")
  return (
    <Backgound>
      <Card>
        {howToPlay? <HowToPlay  setIsVisible={setIsVisible}
          setMoves={setMoves}
          setTime={setTime}
          timeLimit={timeLimit}
          setBoard={setBoard}
          setLoss={setLoss}
          setWin={setWin}
          win={win}
          loss={loss}
          moves={moves}
          time={time}
          setHowToPlay = {setHowToPlay}/>:<GameOver setIsVisible={setIsVisible}
          document = {document}
          setMoves={setMoves}
          setTime={setTime}
          timeLimit={timeLimit}
          setBoard={setBoard}
          setLoss={setLoss}
          setWin={setWin}
          win={win}
          loss={loss}
          moves={moves}
          time={time}
          setHowToPlay = {setHowToPlay}
          worldRecord = {worldRecord}
          
          />

          }
          
      
      </Card>
    </Backgound>
  );
};

export default Overlay;
