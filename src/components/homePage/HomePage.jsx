import React, { useState } from "react";
import { Styled } from "./StyledHomePage";
import { useHistory } from "react-router";
import "./Homepage.scss";
import { value11 } from "../../store/actions";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import Verification from "../verification/Verification";

export const HomePage = () => {
  const history = useHistory();
  const SignUp = (value) => {
    history.push(value);
  };
  const SignIn = (value) => {
    history.push(value);
  };
  const JobListing = (value) => {
    history.push(value);
  };
  const Verification = (value) => {
    history.push(value);
  };
  const ForgotPass = (value) => {
    history.push(value);
  };
  const JobPost = (value) => {
    history.push(value);
  };

  return (
    <Styled.Container>
      <Styled.NavBar>
        <a href="">LOGO</a>
        <div>
          <a href="">Փնտրել աշխատանք</a>
          <a href="">Մեր մասին</a>
        </div>
        <div>
          <a href="">Մուտք</a>
          <a href="">Գրանցվել</a>
        </div>
      </Styled.NavBar>
      <div>
        <button onClick={() => SignUp("SignUp")}>SignUp</button>
      </div>
      <div>
        <button onClick={() => SignIn("SignIn")}>SignIn</button>
      </div>
      <div>
        <button onClick={() => JobListing("JobListing")}>JobListing</button>
      </div>
      <div>
        <button onClick={() => Verification("Verification")}>
          Verification
        </button>
      </div>
      <div>
        <button onClick={() => ForgotPass("ForgotPass")}>ForgotPass</button>
      </div>
      <div>
        <button onClick={() => JobPost("JobPost")}>JobPost</button>
      </div>
    </Styled.Container>
  );
};
