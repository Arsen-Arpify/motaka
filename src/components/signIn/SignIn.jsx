import React from 'react';
import {Styled} from "./StyledSignIn";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons';
import {faEyeSlash, faSquare} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {showPass} from "../../store/actions";
import G from '../image/G.png'
import F from '../image/F.png'


export const SignIn =()=>{
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    const {isPasswordShow, isRePasswordShow, isCheckedUser, isCheckedProv} = state

    const funcPasswordShow = (payload) => {
        dispatch(showPass(payload))
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
                <form action="" method={"post"}>
                    <input type="text" placeholder={'Nike Name'}/>

                    <input type={isPasswordShow ? "text" : "password"} placeholder={'Password'}/>
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

