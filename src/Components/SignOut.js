import { auth } from "./../Firebase/firebase.js";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";

const SignOut = () => {
  const history = useHistory();
  const signout = () => {
    signOut(auth);
    history.push("/signin");
  };

  return (
    <>
      <button onClick={signout}>Sign-Out</button>
    </>
  );
};

export default SignOut;
