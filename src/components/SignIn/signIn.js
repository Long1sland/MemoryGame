import { GlobalStyle } from "../../GlobalStyles";
import { Content, Wrapper } from "./signIn.styles";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignIn = ({ auth }) => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <>
      <Content>
        <h3 id="Title">Memory Game</h3>
        <div id="grid">
          <div className="grid-item" style={{ "--order": 2 }}></div>
          <div className="grid-item" style={{ "--order": 5 }}></div>
          <div className="grid-item" style={{ "--order": 8 }}></div>
          <div className="grid-item" style={{ "--order": 1 }}></div>
          <div className="grid-item" style={{ "--order": 9 }}></div>
          <div className="grid-item" style={{ "--order": 4 }}></div>
          <div className="grid-item" style={{ "--order": 7 }}></div>
          <div className="grid-item" style={{ "--order": 3 }}></div>
          <div className="grid-item" style={{ "--order": 6 }}></div>
        </div>
        <button onClick={signInWithGoogle}>
          <img src="./google.png"></img>

          <h3 id="sign-in">Sign In With Google</h3>
        </button>
      </Content>
    </>
  );
};

export default SignIn;
