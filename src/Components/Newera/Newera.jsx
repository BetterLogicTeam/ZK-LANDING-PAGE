import React from "react";
import "./Newera.css";
import { IoIosArrowForward } from "react-icons/io";

import golb from "../Assets/start_here.png"

export default function Newera() {
  return (
    <div className="neweara">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5">
            <div className="content_freedom">
              <h1>A brand new Era for UX</h1>
              <p>
                Self-custody combined with intuitive, delightful, and
                security-fostering UX is critical to onboard the first billion
                users to web3. Era's design started with the end-user in mind.
              </p>

              <button className="start_btn">
                <span className="gol">
                  <IoIosArrowForward></IoIosArrowForward>
                </span>
                Magical UX on Era
              </button>
            </div>
          </div>

          <div className="col-md-6">
            {/* <div className="free_right text-center">
              <h6 className="fw-bold text-center">We stand for</h6>

              <div className="line_table">
                <p className="tanl">Trustlessness</p>
              </div>
              <div className="line_table">
                <p className="tanl">Security</p>
              </div>
              <div className="line_table">
                <p className="tanl">Resilience</p>
              </div>
              <div className="line_table">
                <p className="tanl">Forkability</p>
              </div>
              <div className="line_tablee">
                <p className="tanl">Community Ownership</p>
              </div>
            </div> */}
            <img src={golb} className="w-100" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
