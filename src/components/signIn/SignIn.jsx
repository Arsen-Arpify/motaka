import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {showPass, reShowPass, checkType, checkTypeProv, capitalType, capitalOk} from "../../store/actions";
import "./StyleSignIn.scss"
import {useHistory} from "react-router";
import InputMask from 'react-input-mask'
import eyeOpen from '../image/eyeOpen.jpg'
import eyeClosed from '../image/eyeClosed.jpg'
import G from '../image/G.png'
import F from '../image/F.png'
import GoogleLogin from "react-google-login";
import FacebookLogin from 'react-facebook-login'

export const SignIn = () => {

    const history = useHistory();
    const SignUp = (value) => {
        history.push(value);
    }
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    const {isPasswordShow} = state
    const funcPasswordShow = (payload) => {
        dispatch(showPass(payload))
    };

    const initialState = {
        value1: '',
    }
    const [special, setSpecial] = useState(initialState)
    const {value1} = special

    const handleChange1 = (e) => {
        setSpecial({value1: e.target.value})

    }

    const url = "https://motaka.herokuapp.com/login"
    const [phone, setPhone] = useState("");

    const [password, setPassword] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("phone", phone);

        formData.append("password", password);


        // let requestOptions = {
        //     method: 'POST',
        //     body: formData,
        //     headers: {'Content-Type': 'application/json'}
        // };
        const allInput = phone === '' || password === ''
        if (allInput) {
            alert('Fill in all required fields')
        } else {

            fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({

                    password,
                    phone,

                }),
            })
                .then(response => {
                    // if (response.ok) {
                    //     setVerification({isVerificationCode: true})
                    // }
                    console.log(response)
                    return response.json()
                })

                .then(data => {

                    console.log('Registration Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    };

    const successResponseGoogle = (response) => {

        fetch("https://motaka.herokuapp.com/googleLogin", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                tokenId: response.tokenId
            }),
        })
            .then(response => {
                console.log(response)
                return response.json()
            })

            .then(data => {
                console.log('Registration Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    const errorResponseGoogle = (response) => {
        console.log(response, 'error')
    }
const successResponseFacebook=(response)=>{
    console.log(response)
    }

    return (

        <header className='header'>
            <div className='aside_left'>
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
            <div className='aside_right'>
                <h1>Sign In to Motaka</h1>
                {/*<div className='social'>*/}
                {/*    <div>*/}
                {/*        <GoogleLogin className='login_google'*/}
                {/*            clientId="672599364365-tpf3f4okr12q4la8su1vrdhhd8gmsm2f.apps.googleusercontent.com"*/}
                {/*            buttonText="SignUp with Google"*/}
                {/*            onSuccess={successResponseGoogle}*/}
                {/*            onFailure={errorResponseGoogle}*/}
                {/*            cookiePolicy={'single_host_origin'}*/}
                {/*        />,*/}
                {/*    </div>*/}
                {/*    <FacebookLogin className='login_facebook'*/}
                {/*                   appId="732890848050124"*/}
                {/*                   autoLoad={false}*/}
                {/*                   callback={successResponseFacebook}/>,*/}
                {/*</div>*/}
                <p className='or'>-OR-</p>

                <form onSubmit={handleSubmit}>


                    <InputMask className='form-control input1'
                               mask="+374 99 999999" maskChar=""
                               placeholder="Phone Number"
                               name='phone'
                               value={phone}
                               onChange={e => setPhone(e.target.value)}
                               autoComplete={'current-name'}
                               type='tel'
                               required
                    />

                    <input className='input4' placeholder={'Password'}
                           type={isPasswordShow ? "text" : "password"}
                           name='password'
                           value={password}
                           minLength='8'
                           maxLength='25'
                           onChange={e => setPassword(e.target.value)}

                           autoComplete={'current-name'}

                           required
                    />


                    <div className='show_eye'>

                        <span onClick={() => funcPasswordShow(isPasswordShow)}>
                        {isPasswordShow ? <img src={eyeClosed}/> : <img src={eyeOpen}/>} </span>
                    </div>

                    <button className='button'>Sign In</button>

                </form>
                <div className='forgot_pass'>
                    <p>Forgot Password?</p>
                </div>

            </div>
        </header>


    );
}

