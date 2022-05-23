import { useState } from "react";
import "./SignUp.scss";
import { useHistory } from "react-router-dom";
import { auth, db } from "./../Firebase/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import SignOut from "./SignOut";
import { collection, addDoc } from "firebase/firestore";

const SignUp = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const signup = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        adduser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + "--> " + errorMessage);
      });
  };

  const adduser = async (user) => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        email: user.email,
        uid: user.uid
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     setUser(user);
  //     adduser(user);
  //   });
  // }, []);

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
