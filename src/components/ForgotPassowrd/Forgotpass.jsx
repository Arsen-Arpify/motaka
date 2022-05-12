import React from "react";
import "./forgotpassowrd.scss"
import PhoneInput from 'react-phone-input-2'

const Forgotpass = () => {
  return (
    <div className="password">
      <div className="password_text">
        <p>Forgot Password</p>
      </div>
      <div className="password_content">
        <p>
          Enter your phone number below to receive your password reset
          instruction
        </p>
      </div>
      <div className="pasword_input">
        <form>
          <label>
            <p>Phone Number</p>
            <input type="tel" placeholder="Enter your phone number" />
          </label>
        </form>
      </div>
      <div className="password_button">
        <button>Reset Password</button>
      </div>
    </div>
  );
};

export default Forgotpass;
