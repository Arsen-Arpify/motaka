import React from 'react';
import {Styled} from "./StyledSignIn";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons';
import {faEyeSlash, faSquare} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {showPass} from "../../store/actions";
import G from '../image/G.png'
import F from '../image/F.png'
import {useState} from "react";




export const SignIn = () => {
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

        <Styled.Root>

            <Styled.Left>
                <Styled.Shape1>
                </Styled.Shape1>
                <Styled.Text>
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please sign up with your personal info</p>
                    <button>Sign Up</button>
                </Styled.Text>
                <Styled.Shape2>
                </Styled.Shape2>
            </Styled.Left>
            <Styled.Right>
                <h1>Sign In to Motaka</h1>
                <Styled.Social>
                    <div>
                        <img src={G} alt=""/>
                        <p>Sign up with Google</p>
                    </div>
                    <div>
                        <img src={F} alt=""/>
                        <p>Sign up with Facebook</p>

                    </div>
                </Styled.Social>
                <p>-OR-</p>
                <form onSubmit={handleSubmit}>
                    <input
                        value={phone}
                        onChange={e=>setPhone(e.target.value)}
                        placeholder={'Nike Name'}
                        type="text"
                        name="phone"
                        required
                    />
                    <input type={isPasswordShow ? "text" : "password"} placeholder={'Password'}
                           value={password}
                           onChange={e=>setPassword(e.target.value)}
                           name="password"
                           required
                    />
                    <span onClick={() => funcPasswordShow(isPasswordShow)}><FontAwesomeIcon
                        icon={faEyeSlash}/> </span>

                    <button>Sign Up</button>

                </form>
                <Styled.Forgot>
                    <a href="">Forgot Password?</a>
                </Styled.Forgot>


            </Styled.Right>
        </Styled.Root>


    );
};

