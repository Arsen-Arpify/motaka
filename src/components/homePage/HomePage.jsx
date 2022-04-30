import React from 'react';
import {Styled} from "./StyledHomePage";
import {useHistory} from "react-router";

export const HomePage = () => {
    const history=useHistory();
    const SignUp = (value) => {
        history.push(value);
    }
    const SignIn = (value) => {
        history.push(value);
    }
    const JobListing = (value) => {
        history.push(value);
    }
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
            <div><button onClick={() => SignUp('SignUp')}>SignUp</button></div>
            <div><button onClick={() => SignIn('SignIn')}>SignIn</button></div>
            <div><button onClick={() => JobListing('JobListing')}>JobListing</button></div>
        </Styled.Container>


    );
};

