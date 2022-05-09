import React, {useState} from 'react';
import {Styled} from "./StyledHomePage";
import {useHistory} from "react-router";
import './Homepage.scss'
import {value11} from "../../store/actions";
import "./styles.css"
import {useDispatch, useSelector} from "react-redux";



export const HomePage = () => {
    const history = useHistory();
    const SignUp = (value) => {
        history.push(value);
    }
    const SignIn = (value) => {
        history.push(value);
    }
    const JobListing = (value) => {
        history.push(value);
    }



  const initialState={
        value1:''
  }
const [state, setState]=useState(initialState)

 const {value1}=state

    const handleChange1 = (e) => {
 setState({value1:e.target.value})

    }


     let colour1 = "",colour2 = "",colour3 = "",colour4 = ""
    if (value1.length >= "8") {
        colour1='blue'
    }
    if (value1.match(/[A-Z]/)) {
       colour2='blue'
    }
    if (value1.match(/[a-z]/)) {
        colour3='blue'
    }
    if (value1.match(/[\d`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/)) {
        colour4='blue'
    }


    // const style = {
    //     boxShadow: "2px 2px 3px 3px #ccc",
    //     border: "2px #eee",
    //     padding: "20px",
    //     marginTop: "25px"
    // }


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
                <button onClick={() => SignUp('SignUp')}>SignUp</button>
            </div>
            <div>
                <button onClick={() => SignIn('SignIn')}>SignIn</button>
            </div>
            <div>
                <button onClick={() => JobListing('JobListing')}>JobListing</button>
            </div>
            {/*<div><button onClick={() => PasswordDisplay('PasswordDisplay')}>Password</button></div>*/}


            <p style={{fontWeight: "bold"}} >All checkmarks must turn green, password must have:</p>
            <p style={{color:colour1}}> At least 8 characters</p>
            <p style={{color:colour2}}> At least 1 uppercase letter</p>
            <p style={{color:colour3}}>At least 1 lowercase letter</p>
            <p style={{color:colour4}}> At least 1 number or special character</p>


            <input className='input4' type='text' placeholder={'Password'}
                   name='password'

                   onInput={handleChange1}
                   autoComplete={'current-name'}

                   required
            />


        </Styled.Container>


    );

}
