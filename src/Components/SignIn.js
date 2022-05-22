import { useState, useEffect } from "react";
import "./SignUp.scss";
import { useHistory } from "react-router-dom";

import { auth } from "./../Firebase/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((userData) => {
      setUser(userData);
      console.log("user data --> ", user);
    });
  }, []);

  return (
    <>
      <div className="page">
        <h1>SignIn Page</h1>
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
          <button onClick={login}>Login</button>
          <button onClick={() => history.push("./Signup")}>
            Goto SignUp page
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
