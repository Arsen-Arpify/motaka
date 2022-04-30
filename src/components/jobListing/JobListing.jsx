import React from 'react';
import {Styled} from "./StyledJobListing";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import create from "zustand";

const usStore = create((set) => ({
    count: false,

    funcJobList: () => set((state) => ({...state, count: !(state).count})),

}))

export const JobListing = () => {


    const {count, funcJobList} = usStore()
    console.log(count)
    return (
        <Styled.Root>
            <Styled.Container>
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
                    <div>
                        <input type="text" placeholder='Search'/>
                        <input type="text" placeholder='Category'/>
                        <div></div>
                        <div>
                            <p>Job Type</p>
                            <p>Full time</p>
                            <p>Part time</p>
                            <p onClick={funcJobList} style={count ? {backgroundColor: "#0DC46E", padding: "-10px"}
                                : null}>
                                <p></p></p>
                            <p><p></p></p>
                            <p></p>
                        </div>
                        <div>
                            <p>Last Activity</p>
                            <p>Last hour</p>
                            <p>Last 24 hour</p>
                            <p>Last 7 days</p>
                            <p>Last 15 days</p>
                            <p>All</p>
                            <p><p></p></p>
                            <p><p></p></p>
                            <p><p></p></p>
                            <p><p></p></p>
                            <p></p>
                        </div>
                        <div>
                            <p>Salary Range</p>
                            <p>10k-20k</p>
                            <p>20k-30k</p>
                            <p>30k-40k</p>
                            <p>40k-50k</p>
                            <p>All</p>
                            <p><p></p></p>
                            <p><p></p></p>
                            <p><p></p></p>
                            <p><p></p></p>
                            <p></p>
                        </div>
                        <div>
                            <p>Gender</p>
                            <p>Male</p>
                            <p>Female</p>
                            <p><p></p></p>
                            <p><p></p></p>
                        </div>

                    </div>
                    <div>2</div>
                </section>
            </Styled.Container>
        </Styled.Root>
    );
};

