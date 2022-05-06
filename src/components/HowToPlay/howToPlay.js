
import GridArray from "../../randomize";


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
        <>
        <div> How To Play
        </div>
        <p>lorem ipsum loreljaldkaja lkdj ;aldkdjd;lsadkjs;laksdsdj ;lkddsj  klada; aldk j;ldks ;ldskj dlkjdl;adkj;adlskj; aldsskj powejlkvxmn.mvn,sass ka;jkdjd l;dskjk</p>
        <img src ="./MemoryGame/fadeout.gif"></img>
        <img src ="./MemoryGame/correct.gif"></img>
        <img src ="./MemoryGame/wrong.gif"></img>
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
 
export default HowToPlay;