import React from 'react';
import {Styled} from "./StyledJobListing";
import {faClock, faUser} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import create from "zustand";
import ironing from "../image/ironing.jpg"
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faLocation} from "@fortawesome/free-solid-svg-icons";


export const useStore = create((set) => ({

    count: false,


    funcJobList: () => set((state) => ({...state, count: !(state).count})),

}))

export const JobListing = () => {


    const {count, funcJobList} = useStore()
    console.log(count)
    return (
        <Styled.Root>
            <body>
            <nav>
                <div>JOB</div>
                <div>
                    <p>Categories</p>
                    <p>About Us</p>
                </div>
                <div>
                    <p>Contact Us</p>
                    <p><FontAwesomeIcon icon={faUser}/></p>
                </div>

            </nav>
            <main>
                <div>Home / Job</div>
                <div>Job Listing</div>
            </main>
            <section>
                <aside1>
                    <input type="text" placeholder='Search'/>
                    <input type="text" placeholder='Category'/>
                    <div>line</div>
                    <div>
                        <p>Job Type</p>
                        <span>
                                <p>Full time</p>
                                <p></p>
                                <p></p>
                            </span>
                        <span>
                                <p>Part time</p>
                                <p></p>
                                <p></p>
                            </span>
                        {/*<span onClick={funcJobList} style={count ? {backgroundColor: "#0DC46E"}:null}>*/}
                        <p>line</p>
                    </div>
                    <div>
                        <p>Last Activity</p>
                        <span>
                                <p>Last hour</p>
                                <p></p>
                                <p></p>
                            </span>
                        <span>
                                <p>Last 24 hour</p>
                                <p></p>
                                <p></p>
                            </span>
                        <span>
                                <p>Last 7 days</p>
                                <p></p>
                                <p></p>
                            </span>
                        <span>
                                <p>Last 15 days</p>
                                <p></p>
                                <p></p>
                            </span>
                        <span>
                                <p>All</p>
                                <p></p>
                                <p></p>
                            </span>
                        <p>line</p>

                    </div>
                    <div>
                        <p>Salary Range</p>
                        <span>
                                <p>10k-20k</p>
                                <p></p>
                                <p></p>
                            </span>
                        <span>
                                <p>20k-30k</p>
                                <p></p>
                                <p></p>
                            </span>
                        <span>
                                <p>30k-40k</p>
                                <p></p>
                                <p></p>
                            </span>
                        <span>
                                <p>40k-50k</p>
                                <p></p>
                                <p></p>
                            </span>
                        <span>
                                <p>All</p>
                                <p></p>
                                <p></p>
                            </span>
                        <p>line</p>
                    </div>
                    <div>

                        <p>Gender</p>
                        <span>
                                <p>Male</p>
                                <p></p>
                                <p></p>
                            </span>
                        <span>
                                <p>Female</p>
                                <p></p>
                                <p></p>
                            </span>
                        <p>line</p>
                    </div>

                </aside1>
                <aside2>
                    <div>
                        <img src={ironing} alt=""/>
                        <div>
                            <p>Ironing</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                            <span>
                                <p><FontAwesomeIcon icon={faClock} color={'#0D0D0D'}/>Full Time</p>
                                <p><FontAwesomeIcon icon={faLocation} color={'#0D0D0D'}/>Yerevan</p>
                            </span>
                        </div>
                        <div>
                            <span>
                                <FontAwesomeIcon icon={faHeart}/>
                            </span>
                            <p>Apply Now</p>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </aside2>
            </section>
            </body>
        </Styled.Root>
    );
};

