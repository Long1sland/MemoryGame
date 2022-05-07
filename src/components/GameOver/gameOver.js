import GridArray from "../../randomize";
import { Wrapper } from "./gameOver.styles";


const GameOver = ({
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
    document,
    worldRecord
  }) => {
    const handleClick = () => {
        console.log("clicked");
        setLoss(false);
        setHowToPlay(false)
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
      console.log("this is the doc",document)
      console.log("this is the world re", worldRecord)
    return (
        
        <Wrapper>
          <div>
          <h1>{win ? "You Win!!! 🎉" : null}</h1>
          <h1>{loss ? "You Lose!!! 😢" : null}</h1>
          <p>Here's how you did</p>
          
        </div>
        
        <div id = "player-info-container">

        
        <div id="current-play" className="play-info">
          <span className="header">Current Time</span>
          <span> Time : {timeLimit - time}</span>
          <span> Moves : {moves}</span>
        </div>
        <div id="personal-best" className="play-info">
          <span className="header">Personal Best</span>
          <span> Time : {document? document.bestGame.time : "null"}</span>
          <span> Moves : {document? document.bestGame.moves : "null"}</span>
        </div>
        <div id="world-record" className="play-info">
          <span className="header">World Record✨</span>
          <span> Time : {worldRecord.time? worldRecord.time : "null"}</span>
          <span> Moves : {worldRecord.moves? worldRecord.time: "null"}</span>
        </div>
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
        </Wrapper>
    );
}
 
export default GameOver;