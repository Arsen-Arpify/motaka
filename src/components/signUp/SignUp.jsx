import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {showPass, reShowPass, checkType, checkTypeProv, capitalType, capitalOk} from "../../store/actions";
import "./StyleSignUp.scss"
import {useHistory} from "react-router";
import InputMask from 'react-input-mask'
import create from "zustand";


export const SignUp = () => {

    const history = useHistory();
    const SignIn = (value) => {
        history.push(value);
    }
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    const {isPasswordShow, isRePasswordShow, isUser, isProvider, defaultTiv, isNumber, isA_ZMin, isArsen} = state
    const funcPasswordShow = (payload) => {
        dispatch(showPass(payload))
    };
    const reFuncPasswordShow = (payload) => {
        dispatch(reShowPass(payload))
    };
    const funcCheckUser = (payload) => {
        dispatch(checkType(payload))

    }
    const funcCheckProv = (payload) => {
        dispatch(checkTypeProv(payload))
    }

    const initialState={
        value1:''
    }
    const [special, setSpecial]=useState(initialState)
    const {value1}=special
    const handleChange1 = (e) => {
        setSpecial({value1:e.target.value})
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

    const url = "https://motaka.herokuapp.com/register"
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    // const [isUser, setIsUser] = useState("");
    // const [isProvider, setIsProvider] = useState("");


    let handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();

        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("phone", phone);
        formData.append("email", email);
        formData.append("isUser", isUser);
        formData.append("isProvider", isProvider);
        formData.append("password", password);
        formData.append("passwordConfirm", passwordConfirm)

        let requestOptions = {
            method: 'POST',
            body: formData,
            headers:
                {'Content-Type': 'application/json'}
        };


        if (firstName === '' || lastName === '' || phone === '' || email === ''
            || password === '' || isUser === false && isProvider === false) {
            alert('Ay axper es inch ka')
        } else if (password !== passwordConfirm) {

            dispatch(capitalType('55'))
            // alert('passwordd dzi')
        } else if (password===passwordConfirm) {
dispatch(capitalOk('50'))
        } else {


            fetch(url, requestOptions)
                .then(response => {
                    if (response.ok) {
                        SignIn('SignIn')
                    }
                    console.log(response)
                    return response.json()
                })

                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        }


    };


    return (

        <header className='header'>
            <div className='aside_left'>
                <div className='shape1'>
                </div>
                <div className='text'>
                    <h1>HELLO Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button onClick={() => SignIn('SignIn')}>Sign In</button>
                </div>
                <div className='shape2'>
                </div>
            </div>
            <div className='aside_right'>
                <h1>Create Account</h1>


                <form onSubmit={handleSubmit}>
                    <div className='user' onClick={() => funcCheckUser(isUser)}>
                        <div style={isUser ? {backgroundColor: "#0DC46E"} : {backgroundColor: "transparent"}}>

                        </div>
                    </div>
                    <div className='provider' onClick={() => funcCheckProv(isProvider)}>
                        <div style={isProvider ? {backgroundColor: "#0DC46E"} : {backgroundColor: "transparent"}}>

                        </div>
                    </div>

                    <p className='user_name'>User</p>
                    <p className='provider_name'>Service Provider</p>
                    <div className='must_be'>
                        <p>Must be</p>
                        <p style={{color:colour1}}>A-Z;</p>
                        <p style={{color:colour2}}>a-z;</p>
                        <p style={{color:colour3}}>0-9;</p>
                        <p style={{color:colour4}}>!@#$%^&*+_=();</p>
                    </div>


                    <input className='input1' type="text"
                           placeholder={'First Name'}
                           name='firstName'
                           value={firstName}
                           pattern="[a-zA-Z'-'\s]*"
                           title="Only Letters"
                           minLength='4'
                           onChange={e => setFirstName(e.target.value)}
                           autoComplete={'current-name'}
                           required
                    />

                    <input className='input2' type="text"
                           placeholder={'Last Name'}
                           name='lastName'
                           value={lastName}
                           onChange={e => setLastName(e.target.value)}
                           autoComplete={'current-name'}
                           required
                    />
                    <input className='input3' type="email"
                           placeholder={'Email'}
                           name='email'
                           value={email}
                           onChange={e => setEmail(e.target.value)}
                           autoComplete={'current-name'}
                           required
                    />
                    <input className='input4' type={isPasswordShow ? "text" : "password"} placeholder={'Password'}
                           name='password'
                           value={password}
                           onChange={e => setPassword(e.target.value)}
                           onInput={handleChange1}
                           autoComplete={'current-name'}

                           required
                    />
                    <input className='input5' type={isRePasswordShow ? "text" : "password"}
                           placeholder={'Reset Password'}
                           name='passwordConfirm'
                           value={passwordConfirm}
                           onChange={e => setPasswordConfirm(e.target.value)}
                           style={isArsen ? {borderColor: 'red'} : null}
                           required

                    />
                    <InputMask className='form-control'
                               mask="+374 99 999999" maskChar=""
                               placeholder="Phone Number"
                               name='phone'
                               value={phone}
                               onChange={e => setPhone(e.target.value)}
                               autoComplete={'current-name'}
                               type='tel'
                               required
                    />

                    <div className='show_ase'>
                     <span onClick={() => funcPasswordShow(isPasswordShow)}>
                        <FontAwesomeIcon icon={faEyeSlash}/></span>
                        <span onClick={() => reFuncPasswordShow(isRePasswordShow)}>
                        <FontAwesomeIcon icon={faEyeSlash}/> </span>
                    </div>

                    <button className='button'>Sign Up</button>

                </form>

            </div>
        </header>


    );
}


// fetch(url, {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//           phone,
//           password,
//           passwordConfirm,
//           email,
//           firstName,
//           lastName,
//           isUser,
//           isProvider
//       }),
//   })
//       .then(response => {
//           if (response.ok) {
//               SignIn('SignIn')
//           }
//           console.log(response)
//           return response.json()
//       })
//
//       .then(data => {
//
//           console.log('Registration Success:', data);
//       })
//       .catch((error) => {
//           console.error('Error:', error);
//       });
//
