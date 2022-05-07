import GridArray from "../randomize";
import Grid from "./Grid/grid";
import Header from "./header/header";
import Moves from "./Moves/moves";
import Timer from "./Timer/timer";
import { GlobalStyle } from "../GlobalStyles";
import { Footer } from "../Footer.styles";
import Overlay from "./overlay/overlay";

import { useCollectionData, useCollectionDataOnce, useDocumentData } from "react-firebase-hooks/firestore";
import { useEffect, useState } from "react";
import { collection, serverTimestamp, setDoc, doc, query, orderBy, limit } from "firebase/firestore";

const Game = ({ firestore, auth }) => {
  const timeLimit = 120;
  const maxMoves = 30;
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(timeLimit);
  const [win, setWin] = useState(false);
  const [loss, setLoss] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [howToPlay, setHowToPlay] = useState(true);
  const [worldRecord, setWorldRecord] = useState({});
  const [Board, setBoard] = useState(GridArray);

  const touchEnabled =
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0 ||
    "ontouchstart" in window;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  const gameRef = collection(firestore, "test");
  const docRef = doc(gameRef, `${auth.currentUser.uid}`);
  const [document] = useDocumentData(docRef);
 
 const [bestGames] = useCollectionData(query(gameRef, orderBy("bestGame")))

  useEffect(() => {
    if (win || loss) {
      updateUserData();
    }
  }, [win, loss]);

  useEffect(() =>{
    if (bestGames){getWorldRecord()}
    
  },[bestGames])

 
 
 function getWorldRecord(){
   console.log(bestGames)
   if(bestGames.length == 0) {return}
   else{
     setWorldRecord((prev) =>{
prev = bestGames.reduce((worldRecord, {bestGame}) =>{
    if(worldRecord.time == null) worldRecord = bestGame
    worldRecord = bestGame.time <= worldRecord.time? bestGame: worldRecord
console.log(worldRecord)
    return worldRecord
  },{})
  return prev


   })
   }
   
  
 }
 

 
      

  const updateUserData = async () => { 
   
    
    
      
    if (document) {
      let bestGame = document.sessions.reduce((best, game) =>{
        if(best.time == null) best = game
        best = game.time <= best.time? game : best
        
        return best
      }, {})
      let displayName = auth.currentUser.displayName
     
      await setDoc(doc(gameRef, `${auth.currentUser.uid}`), {
        gamesPlayed: document.gamesPlayed + 1,
        createdAt: serverTimestamp(),
        uid: auth.currentUser.uid,
        email: auth.currentUser.email,
       bestGame: {...bestGame, displayName},
        sessions: [
          ...document.sessions,
          {
            moves: moves,
            time: timeLimit - time,
            win: win,
            touchEnabled: touchEnabled,
            screenWidth,
            screenHeight,
          },
        ],
        displayName: auth.currentUser.displayName,
      });
    } else {
      await setDoc(doc(gameRef, `${auth.currentUser.uid}`), {
        gamesPlayed: 1,
        createdAt: serverTimestamp(),
        uid: auth.currentUser.uid,
        email: auth.currentUser.email,
        bestGame:{
          moves: moves,
          time: timeLimit - time,
          win: win,
          touchEnabled: touchEnabled,
          screenWidth,
          screenHeight,
          displayName: auth.currentUser.displayName
        },
        sessions: [
          {
            moves: moves,
            time: timeLimit - time,
            win: win,
            touchEnabled: touchEnabled,
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
          },
        ],
        displayName: auth.currentUser.displayName,
      });
    }
  };

  return (
    <>
      <Header
        auth={auth}
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
          howToPlay = {howToPlay}
        ></Timer>
        <Moves
          moves={moves}
          setWin={setWin}
          setLoss={setLoss}
          maxMoves={maxMoves}
        ></Moves>
      </Footer>
      {(loss || win || howToPlay) && (
        <Overlay
        document = {document}
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
          setHowToPlay = {setHowToPlay}
          howToPlay = {howToPlay}
          worldRecord = {worldRecord}
        ></Overlay>
      )}

      <GlobalStyle />
    </>
  );
};

export default Game;
