import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {showPass, reShowPass, checkType, checkTypeProv,} from "../../store/actions";
import "./StyleSignUp.scss"
import {useHistory} from "react-router";
import $ from 'jquery'
import InputMask from 'react-input-mask'



export const SignUp = () => {

    const history = useHistory();
    const SignIn = (value) => {
        history.push(value);
    }
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    const {isPasswordShow, isRePasswordShow, isUser, isProvider, defaultTiv, isNumber} = state
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

    };

    /*
    (?=.*[a-z]) : matches letters lowercase .
    (?=.*[A-Z]) : matches letters uppercase .
    (?=.*[0-9]) : matches digit .
    (?=.*[!@#\$%\^&\*_]) : matches special character .
    (?=.{6,12}) : matches text length between 6 to 12 .
    - for more info about regular expressions visit : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
    */
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
                        <del>A-Z;</del>
                        <del>a-z;</del>
                        <del>0-9;</del>
                        <del>!@#$%^&*+_=();</del>
                    </div>


                    <input className='input1' type="text"
                           placeholder={'First Name'}
                           name='firstName'
                           value={firstName}
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

                           autoComplete={'current-name'}
                           required
                    />
                    <input className='input5' type={isRePasswordShow ? "text" : "password"}
                           placeholder={'Reset Password'}
                           name='passwordConfirm'
                           value={passwordConfirm}
                           onChange={e => setPasswordConfirm(e.target.value)}
                           required
                    />
                    <InputMask className='form-control'
                               mask="+374 99 999999" maskChar=" "
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


/*    fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              phone,
              password,
              passwordConfirm,
              email,
              firstName,
              lastName,
              isUser,
              isProvider
          }),
      })
          .then(response => {
              if (response.ok) {
                  SignIn('SignIn')
              }
              console.log(response)
              return response.json()
          })

          .then(data => {

              console.log('Registration Success:', data);
          })
          .catch((error) => {
              console.error('Error:', error);
          });

*/
