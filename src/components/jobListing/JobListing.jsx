import React from "react";
import { faClock, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import create from "zustand";
import ironing from "../image/ironing.jpg";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import "./StyleJobListing.scss";

export const useStore = create((set) => ({
  count1: "",
  count2: "",

  funcJobList: () =>
    set((state) => ({ ...state, count1: false, count2: !state.count2 })),
}));
export const JobListing = () => {
  const { count1, count2, funcJobList } = useStore();

  const searchJob = () => {};

  return (
    <header>
      <div className="container">
        <nav>
          <div>JOB</div>
          <div>
            <p>Categories</p>
            <p>About Us</p>
          </div>
          <div>
            <p>Contact Us</p>
            <p>
              <FontAwesomeIcon icon={faUser} />
            </p>
          </div>
        </nav>
        <main>
          <div>Home / Job</div>
          <div>Job Listing</div>
        </main>
        <section>
          <div className="aside1">
            <input type="search" placeholder="Search..." onInput={searchJob} />
            <input type="text" placeholder="Category" />
            <div></div>
            <div>
              <p>Job Type</p>
              <span>
                <p>Full time</p>
                <p></p>
                <p
                  onClick={funcJobList}
                  style={count1 ? { backgroundColor: "#0DC46E" } : null}
                ></p>
              </span>
              <span>
                <p>Part time</p>
                <p></p>
                <p
                  onClick={funcJobList}
                  style={count2 ? { backgroundColor: "#0DC46E" } : null}
                ></p>
              </span>
              <p></p>
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
              <p></p>
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
              <p></p>
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
              <p></p>
            </div>
          </div>
          <div className="aside2">
            <div className="job1">
              <img src={ironing} alt="" />
              <div>
                <p>Ironing</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                <span>
                  <p>
                    <FontAwesomeIcon icon={faClock} color={"#0D0D0D"} />
                    Full Time
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faLocation} color={"#0D0D0D"} />
                    Yerevan
                  </p>
                </span>
              </div>
              <div>
                <span>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
                <p>Apply Now</p>
              </div>
            </div>
            <div className="job2">
              <img src={ironing} alt="" />
              <div>
                <p>Ironing</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                <span>
                  <p>
                    <FontAwesomeIcon icon={faClock} color={"#0D0D0D"} />
                    Full Time
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faLocation} color={"#0D0D0D"} />
                    Yerevan
                  </p>
                </span>
              </div>
              <div>
                <span>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
                <p>Apply Now</p>
              </div>
            </div>
            <div className="job3">
              <img src={ironing} alt="" />
              <div>
                <p>Ironing</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                <span>
                  <p>
                    <FontAwesomeIcon icon={faClock} color={"#0D0D0D"} />
                    Full Time
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faLocation} color={"#0D0D0D"} />
                    Yerevan
                  </p>
                </span>
              </div>
              <div>
                <span>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
                <p>Apply Now</p>
              </div>
            </div>
            <div className="job4">
              <img src={ironing} alt="" />
              <div>
                <p>Ironing</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                <span>
                  <p>
                    <FontAwesomeIcon icon={faClock} color={"#0D0D0D"} />
                    Full Time
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faLocation} color={"#0D0D0D"} />
                    Yerevan
                  </p>
                </span>
              </div>
              <div>
                <span>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
                <p>Apply Now</p>
              </div>
            </div>
            <div className="job5">
              <img src={ironing} alt="" />
              <div>
                <p>Ironing</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                <span>
                  <p>
                    <FontAwesomeIcon icon={faClock} color={"#0D0D0D"} />
                    Full Time
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faLocation} color={"#0D0D0D"} />
                    Yerevan
                  </p>
                </span>
              </div>
              <div>
                <span>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
                <p>Apply Now</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};
