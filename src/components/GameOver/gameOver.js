import GridArray from "../../randomize";


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
    setHowToPlay
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
    return (
        <>
        <div>
          <h1>{win ? "You Win!!! 🎉" : null}</h1>
          <h1>{loss ? "You Lose!!! 😢" : null}</h1>
          <p>Here's how you did</p>
        </div>

        <div id="current-play" className="play-info">
          <span>Your Time : {timeLimit - time}</span>
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
        </>
    );
}
 
export default GameOver;