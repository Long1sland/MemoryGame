import Game from "./components/Game";
import { initializeApp } from "@firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import SignIn from "./components/SignIn/signIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { GlobalStyle } from "./GlobalStyles";

const app = initializeApp({
  apiKey: "AIzaSyAREeqkXXrPE9X9pTWeC0JiHM2XGzrnMjw",
  authDomain: "memory-game-c6731.firebaseapp.com",
  projectId: "memory-game-c6731",
  storageBucket: "memory-game-c6731.appspot.com",
  messagingSenderId: "389407632603",
  appId: "1:389407632603:web:faa4ef8ca85ba53ef330fe",
  measurementId: "G-R42WYFBWPV",
});

const auth = getAuth(app);
const firestore = getFirestore(app);

const App = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      {user ? (
        <Game firestore={firestore} auth={auth} />
      ) : (
        <SignIn auth={auth} />
      )}
      <GlobalStyle />
    </>
  );
};

export default App;
