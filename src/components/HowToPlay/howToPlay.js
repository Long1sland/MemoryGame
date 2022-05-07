
import GridArray from "../../randomize";
import { Wrapper } from "./howToPlay.styles";


const HowToPlay = ({
    setIsVisible,
    setTime,
    setMoves,
    timeLimit,
    setBoard,
    setLoss,
    setWin,
    
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
        
        <Wrapper>
      <div id = "title">How To <span>Play</span></div>
        <p>When the game first loads, you're shown a grid of numbers. your job is to <span>memorize</span> as many of the numbers that show up in the grid before they fade away. 🤔</p>
        <img src ="./fadeout.gif" style={{width: "39vmin", marginBottom:"30px"}}></img>
        <p>When the numbers finally fade away, the game begins. You must <span>match</span> all the tiles in the grid to their pairs as quickly as you can. ⏱🏃‍♂️</p>
        <img src ="./correct.gif" style={{width: "38vmin", marginBottom:"30px"}}></img>
        <p>If you  select to tiles that don't match, the both of the tiles you've selected <span>disappear.</span> Oh, and yes, we don't show you what's under the second tile. 😈</p>
        <img src ="./wrong.gif" style={{width: "38vmin", marginBottom:"30px"}}></img>
        <h2 id = "good-luck">Good Luck!!!</h2>
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
 
export default HowToPlay;