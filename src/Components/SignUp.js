import { useState, useEffect } from "react";
import "./SignUp.scss";
import { useHistory } from "react-router-dom";
import { auth } from "./../Firebase/firebase.js";
import { signOut, createUserWithEmailAndPassword } from "firebase/auth";
import SignOut from "./SignOut";

const SignUp = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const signup = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user1 = userCredential.user;
        console.log("user --> ", user1);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + "--> " + errorMessage);
      });
  };

  // const signout = () => {
  //   signOut(auth);
  // };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log("user data --> ", user);
    });
  }, []);

  return (
    <>
      <div className="page">
        <h1>SignUp Page</h1>
        {user === null ? (
          <div className="signup_body">
            <div className="form">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={signup}>SignUp</button>
            <button onClick={() => history.push("./Signin")}>
              Goto SignIn page
            </button>
          </div>
        ) : (
          <div>
            <div>{user?.uid}</div>
            <SignOut />
            {/* <button onClick={signout}>sign-out</button> */}
          </div>
        )}
      </div>
    </>
  );
};

export default SignUp;
