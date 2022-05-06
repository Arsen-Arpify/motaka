import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {showPass} from "../../store/actions";
import G from '../image/G.png'
import F from '../image/F.png'
import {useState} from "react";
import {useHistory} from "react-router";
import './StyleSignIn.scss'


export const SignIn = () => {
    const history=useHistory();
    const SignUp = (value) => {
        history.push(value);
    }
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    const {isPasswordShow, isRePasswordShow, isCheckedUser, isCheckedProv} = state

    const funcPasswordShow = (payload) => {
        dispatch(showPass(payload))
    };


    const url = "https://motaka.herokuapp.com/login"
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");


    let handleSubmit = async (e) => {
        e.preventDefault();


        let formData = new FormData();

        formData.append("phone", phone);
        formData.append("password", password);

        // console.log(formData);

        // let requestOptions = {
        //     method: 'POST',
        //     body: formData,
        //     // headers:
        //     //     {'Content-Type': 'application/json'}
        // };

        // fetch(url, requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));


        fetch('https://motaka.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phone: phone,
                password: password

            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    return (

        <div className='container'>

            <div className='left-bar'>
                <div className='shape1'>
                </div>
                <div className='text'>
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please sign up with your personal info</p>
                    <button onClick={() => SignUp('SignUp')}>Sign Up</button>
                </div>
                <div className='shape2'>
                </div>
            </div>
            <div className='right_bar'>
                <h1>Sign In to Motaka</h1>
                <div className='social'>
                    <div>
                        <img src={G} alt=""/>
                        <p>Sign up with Google</p>
                    </div>
                    <div>
                        <img src={F} alt=""/>
                        <p>Sign up with Facebook</p>

                    </div>
                </div>
                <p>-OR-</p>
                <form onSubmit={handleSubmit}>
                    <input
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder={'User phone'}
                        type="text"
                        name="phone"
                        autoComplete={'current-phone'}
                        required
                    />
                    <input type={isPasswordShow ? "text" : "password"} placeholder={'Password'}
                           value={password}
                           autoComplete={'current-password'}
                           onChange={e => setPassword(e.target.value)}
                           name="password"
                           required
                    />
                    <span onClick={() => funcPasswordShow(isPasswordShow)}><FontAwesomeIcon
                        icon={faEyeSlash}/> </span>

                    <button>Sign In</button>

                </form>
                <div className='forgot_pass'>
                    <a href="">Forgot Password?</a>
                </div>


            </div>
        </div>


    );
};

