import React from "react";

import LockIcon from "../assets/lock-solid.svg";
import LockIconLight from "../assets/lock-solid-light.svg";
import FacebookIcon from "../assets/facebook-f-brands.svg";
import GoogleIcon from "../assets/google-brands.svg";

const Form = ({ dark }) => {
  return (
    <div className={!dark ? "form" : "form dark"}>
      <h1>Login</h1>
      <form>
        <div className="form__username">
          <label>username</label>
          <input type="text" placeholder="enter username" />
        </div>
        <div className="form__password">
          <label>password</label>
          <input type="password" placeholder="enter password" />
        </div>
        <div className="form__options">
          <div className="form__options__check">
            <input type="checkbox" name="Remember me" />
            <span>Remember me</span>
          </div>
          <div className="form__options__forgot">
            <img src={dark ? LockIconLight : LockIcon} alt="lock-icon" />
            <span>Forgot Password?</span>
          </div>
        </div>
        <button>Submit</button>
      </form>

      <h3 className="form__statement">
        Don’t have an account?<a href="/"> Sign Up</a>
      </h3>

      <div className="form__login-options">
        <div>
          <p>Or Login with</p>
        </div>

        <div>
          <span>
            <img src={GoogleIcon} alt="google-logo" />
          </span>
          <span>
            <img src={FacebookIcon} alt="facebook-logo" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Form;
