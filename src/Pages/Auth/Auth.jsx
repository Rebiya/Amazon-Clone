import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/download.png";
import styles from "./Auth.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";
import { type } from "../../Utility/action.type";
import { ClipLoader } from "react-spinners";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({ signin: false, signup: false });

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation();

  //function to be called onSubmit of sign in and sign up button
  const authHandler = async (e) => {
    e.preventDefault();
    const action = e.target.name;

    if (action === "signin") {
      setLoading({ ...loading, signin: true });
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        // console.log("Signed in successfully:", userCredential);
        dispatch({
          type: type.SET_USER,
          user: userCredential.user
        });
        setLoading({ ...loading, signIn: false });
        navigate(navStateData?.state?.redirect || "/");
      } catch (err) {
        console.error("Error signing in:", err.message);
        setError(err.message);
      } finally {
        setLoading({ ...loading, signin: false }); // Stop loading for signin
      }
    } else if (action === "signup") {
      setLoading({ ...loading, signup: true }); // Start loading for signup
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        // console.log("Account created successfully:", userCredential);

        dispatch({
          type: type.SET_USER,
          user: userCredential.user
        });
        setLoading({ ...loading, signUp: false });
        navigate(navStateData?.state?.redirect || "/");
      } catch (err) {
        console.error("Error signing up:", err.message);
        setError(err.message);
      } finally {
        setLoading({ ...loading, signup: false });
      }
    }
  };

  return (
    <section>
      {/* Logo Wrapper */}
      <div>
        <Link to="/">
          <img src={img} alt="Logo" />
        </Link>
      </div>
      <div className={styles.signinForm}>
        {/* Sign In Form */}
        <div>
          <h1>Sign In</h1>
          {navStateData?.state?.msg && (
            <small
              style={{
                padding: "5px",
                textAlign: "center",
                color: "red",
                fontWeight: "bold"
              }}
            >
              {navStateData?.state?.msg}
            </small>
          )}
          <form>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </form>
          <button
            className={styles.signinbtn}
            type="submit"
            onClick={authHandler}
            name="signin"
            disabled={loading.signin}
          >
            {loading.signin ? <ClipLoader size={15} /> : "Sign In"}
          </button>
        </div>

        {/* Terms and Conditions */}
        <div>
          <p>
            By using Amazon Services, you agree to our terms.{" "}
            <a href="#">Conditions of Use and Privacy Notice.</a> Review our
            Privacy Notice for details on our data practices.
          </p>
        </div>

        {/* Display Error Message */}
        <div>{error && <small style={{ color: "red" }}>{error}</small>}</div>
      </div>

      {/* Sign Up Button */}
      <div>
        <br />
        <hr />
        <br />
        <button
          className={styles.signupbtn}
          type="submit"
          onClick={authHandler}
          name="signup"
          disabled={loading.signup}
        >
          {loading.signup ? (
            <ClipLoader size={15} />
          ) : (
            "Create your Amazon account"
          )}
        </button>
      </div>
    </section>
  );
};

export default Auth;
