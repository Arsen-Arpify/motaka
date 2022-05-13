import React, {useState} from 'react';
import {useHistory} from "react-router";
import './Homepage.scss'
import chat from '../image/chat.jpg'
import HPImg from '../image/HPImg.png'
import Search from '../image/Search.jpg'
import Vector from '../image/Vector.jpg'
import IconPerson from '../image/IconPerson.jpg'
import IconList from '../image/IconList.jpg'
import IconList1 from '../image/IconList1.jpg'



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

    return (
        <header className='header_homePage'>
            <div className='container_homePage'>
                <div className='nav_homePage'>
                    <div>Motaka LOGO</div>
                    <div>
                        <p>Categories</p>
                        <p>About Us</p>
                    </div>
                    <div>
                                      <img src={chat} alt=""/>
                        <button>Sign Up</button>
                    </div>
                </div>
                <div className='title_homePage'>
                    <div>
                        <p>
                            Start Your Career Here With <span>1000+</span> Best Jobs For You
                        </p>
                        <div className='search_homePage'>
                            <input type="search" name="" id=""
                                   placeholder={'Find the job you want'}
                            />
                            <button>Search</button>
                            <img src={Search} alt=""/>
                        </div>
                    </div>

                    <img src={HPImg} alt=""/>

                </div>
                <div className='job_categories_homePage'>
                    <p>Popular <span>Job</span> Categories</p>
                    <p>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam.</p>
                </div>
                <div className='categories_bar'>
                    <div className='categories1'>
                        <span><img src={Vector} alt=""/></span>
                        <div>
                            <p>Cleaning</p>
                            <p>Lorem ipsum dolor sit </p>
                        </div>
                    </div>
                    <div className='categories1'>
                        <span><img src={Vector} alt=""/></span>
                        <div>
                            <p>Laundry</p>
                            <p>Lorem ipsum dolor sit </p>
                        </div>
                    </div>
                    <div className='categories1'>
                        <span><img src={Vector} alt=""/></span>
                        <div>
                            <p>Ironing</p>
                            <p>Lorem ipsum dolor sit </p>
                        </div>
                    </div>
                    <div className='categories1'>
                        <span><img src={Vector} alt=""/></span>
                        <div>
                            <p>Plumbing</p>
                            <p>Lorem ipsum dolor sit </p>
                        </div>
                    </div>
                    <div className='categories1'>
                        <span><img src={Vector} alt=""/></span>
                        <div>
                            <p>Technology</p>
                            <p>Lorem ipsum dolor sit </p>
                        </div>
                    </div>
                    <div className='categories1'>
                        <span><img src={Vector} alt=""/></span>
                        <div>
                            <p>Beauty</p>
                            <p>Lorem ipsum dolor sit </p>
                        </div>
                    </div>
                </div>
                <div className='loginBar_homePage'>
                    <p>How does it work</p>
                    <div className='round_bar_homePage'>
                        <div className='round1'>
                            <span>
                                <img src={IconPerson} alt=""/>
                            </span>
                            <div>Login / Sign Up</div>
                        </div>
                        <div className='round2'>
                            <span>
                                <img src={IconList} alt=""/>
                            </span>
                            <div>Search Job</div>
                        </div>
                        <div className='round3'>
                            <span>
                                <img src={IconList1} alt=""/>
                            </span>
                            <div>Apply For Job</div>
                        </div>
                    </div>
                    <div className='right_round'>
                        <b>1</b>
                        <b>2</b>
                        <b>3</b>
                    </div>

                </div>
                <div className='min_round_left'><p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p></div>
                <div className='min_round_right'><p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p></div>
                <div className='topWorkers_homePage'>
                    <div id='title_topWorkers'>
                        <div>Top <span> Workers</span></div>
                        <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
                    </div>
                    <div id='user_workers1'>
                        <div></div>
                        <p>Sam William</p>
                        <p>UI/UX Designer</p>
                        <span><p>View</p></span>
                        <div>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                    <div id='user_workers2'></div>
                    <div id='user_workers3'></div>
                    <div id='user_workers4'></div>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className='buttons_homePage'>
                    <div>
                        <button onClick={() => SignUp('SignUp')}>SignUp</button>
                    </div>
                    <div>
                        <button onClick={() => SignIn('SignIn')}>SignIn</button>
                    </div>
                    <div>
                        <button onClick={() => JobListing('JobListing')}>JobListing</button>
                    </div>
                </div>

            </div>
        </header>


    );

}
