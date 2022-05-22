import { auth } from "./../Firebase/firebase.js";
import { signOut } from "firebase/auth";

const SignOut = () => {
  const signout = () => {
    signOut(auth);
  };

  return (
    <>
      <button onClick={signout}>Sign-Out</button>
    </>
  );
};

export default SignOut;
