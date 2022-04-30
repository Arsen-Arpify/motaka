import React from 'react';
import {Styled} from "./StyledSignUp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons';
import {faEyeSlash, faSquare} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {showPass, reShowPass, checkType, checkTypeProv} from "../../store/actions";
import "./App.css"
import PhoneInput from "react-phone-input-2";
import G from "../image/G.png";
import F from "../image/F.png";


export const SignUp =()=>{
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    const {isPasswordShow, isRePasswordShow, isCheckedUser, isCheckedProv} = state

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


    return (

        <Styled.Root>
            <Styled.SquareUser onClick={() => funcCheckUser(isCheckedUser)}>
                <div style={isCheckedUser ? {backgroundColor: "#0DC46E"} : {backgroundColor: "transparent"}}>
                </div>
            </Styled.SquareUser>
            <Styled.SquareProv onClick={() => funcCheckProv(isCheckedProv)}>
                <div style={isCheckedProv ? {backgroundColor: "#0DC46E"} : {backgroundColor: "transparent"}}>
                </div>
            </Styled.SquareProv>
            <Styled.Left>
                <Styled.Shape1>
                </Styled.Shape1>
                <Styled.Text>
                    <h1>HELLO Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button>Sign Up</button>
                </Styled.Text>
                <Styled.Shape2>
                </Styled.Shape2>
            </Styled.Left>
            <Styled.Right>
                <h1>Create Account</h1>
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
                <form action="" method={"post"}>
                    <input type="text" placeholder={'First Name'}/>
                    <input type="text" placeholder={'Last Name'}/>
                    <input type="email" placeholder={'Email'}/>
                    {/*<input type="number" value={+374} placeholder={'Phone Number'}/>*/}
                    <input type={isPasswordShow ? "text" : "password"} placeholder={'Password'}/>
                    <span onClick={() => funcPasswordShow(isPasswordShow)}><FontAwesomeIcon icon={faEyeSlash}/> </span>
                    <input type={isRePasswordShow ? "text" : "password"} placeholder={'Reset Password'}/>
                    <span onClick={() => reFuncPasswordShow(isRePasswordShow)}><FontAwesomeIcon
                        icon={faEyeSlash}/> </span>
                    <div>
                        <div>
                            <label htmlFor="User" onClick={() => funcCheckUser(isCheckedUser)}>User</label>
                        </div>
                        <div>
                            <label htmlFor="Service Provider" onClick={() => funcCheckProv(isCheckedProv)}>Service Provider</label>
                        </div>
                    </div>
                    <button>Sign Up</button>

                </form>

                    <PhoneInput className="App" country={'am'} value={'374'} placeholder={'Phone Number'} type={'tel'}/>


            </Styled.Right>
        </Styled.Root>


    );
};

