import { Backgound, Card } from "./overlay.styles";
import GridArray from "../../randomize";

const Overlay = ({
  setIsVisible,
  setTime,
  setMoves,
  timeLimit,
  Board,
  setBoard,
  setLoss,
  setWin,
  moves,
  time,
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
    <Backgound>
      <Card>
        <h1>You Win!!! 🎉</h1>
        <div id="current-play" className="play-info">
          <span>Your Time : {time}</span>
          <span>Your Moves : {moves}</span>
        </div>

        <button
          id="new"
          onClick={() => {
            handleClick();
            setBoard(GridArray);
          }}
        >
          New Game
        </button>
      </Card>
    </Backgound>
  );
};

export default Overlay;
