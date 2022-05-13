import React from "react";
import { useHistory } from "react-router";
import "./Verification.scss";

const Verification = () => {
  const history = useHistory();

  return (
    <div className="verification" style={{overflow: "hidden"}}>
      <div className="verificate__header">
        <p>Verification</p>
      </div>
      <div className="verificate__text">
        <p>
          Enter your verification code below to receive your password reset
          instruction
        </p>
      </div>
      <div className="verificate__content">
        <form >
          <label>
            <p>Verfication code</p>
            <input type="text" placeholder="Enter your verification code" />
          </label>
          <label>
            <p>New Password</p>
            <input type="password" placeholder="Enter your new password"/>
          </label>
          <label>
            <p>Confirm New Password</p>
            <input type="password" placeholder="Confirm new password"/>
          </label>
        </form>
      </div>
      <div className="verificate__button">
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Verification;
