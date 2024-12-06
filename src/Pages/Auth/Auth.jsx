import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/download.png";
import styles from "./Auth.module.css";
const Auth = () => {
  return (
    <section>
      {/* logo wrapper */}
      <div>
        <Link to="">
          <img src={img} alt="" />
        </Link>
      </div>
      <div className={styles.signinForm}>
        {/* signup form */}
        <div>
          <h1>sign in</h1>
          <form action="" method="get">
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
          </form>
          <button className={styles.signinbtn}>Sign in</button>
        </div>
        {/* terms and conditions */}
        <div>
          <p>
            By using Amazon Services, you agree to our terms.
            <a>Conditions of Use and Privacy Notice.</a> Review our Privacy
            Notice for details on our data practices.
          </p>
        </div>
      </div>
      <div>
       <br /> <hr /><br />
        <button className={styles.signupbtn}>create your amazon account</button>
      </div>
    </section>
  );
};

export default Auth;
