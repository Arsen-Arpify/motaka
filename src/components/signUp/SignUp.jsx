import React from 'react';
import {Styled} from "./StyledSignUp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons';
import {faEyeSlash} from "@fortawesome/free-solid-svg-icons";






export const SignUp = () => {

    return (


        <Styled.Root>

            <Styled.Left>
                <Styled.Sheip1>
                </Styled.Sheip1>
                <Styled.Text>
                    <h1>HELLO Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button>Sign Up</button>
                </Styled.Text>
                <Styled.Sheip2>
                </Styled.Sheip2>
            </Styled.Left>
            <Styled.Right>
                <h1>Create Account</h1>
                <Styled.Social>
                    <div>
                        <span><FontAwesomeIcon icon={faGoogle}  />  Sign up with Google</span>
                        <span><FontAwesomeIcon icon={faEyeSlash}/> </span>
                    </div>
                    <div>
                        <span><FontAwesomeIcon icon={faFacebook} /> Sign up with Facebook</span>
                        <span><FontAwesomeIcon icon={faEyeSlash}/> </span>
                    </div>
                </Styled.Social>
                <p>-OR-</p>
                <form action="" method={"post"}>
                    <input type="text" placeholder={'First Name'}/>
                    <input type="text" placeholder={'Last Name'}/>
                    <input type="email" placeholder={'Email'}/>
                    <input type="number" placeholder={'Phone Number'}/>
                    <input type="password" placeholder={'Password'} />
                    <input type="password" placeholder={'Reset Password'}/>
                    <div>
                        <div>
                            <input type={"radio"} value={"User"}/>
                            <label htmlFor="User">User</label>
                        </div>
                        <div>
                            <input type={"radio"} value={"Service Provider"}/>
                            <label htmlFor="Service Provider">Service Provider</label>
                        </div>
                    </div>
                    <button>Sign Up</button>
                </form>
            </Styled.Right>
        </Styled.Root>



    );
};

