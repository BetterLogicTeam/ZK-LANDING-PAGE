import React from "react";
import "./Freedom.css";
import { IoIosArrowForward } from "react-icons/io";
export default function Freedom() {
  return (
    <div className="main_freedom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="content_freedom">
              <div className="cir mrld">
                <svg
                  width="21"
                  height="32"
                  viewBox="0 0 21 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 16.2743L10.2058 12.0915V1L1 16.2743Z"
                    stroke="white"
                    stroke-width="1.19"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.2058 12.0918L1 16.2747L10.2058 21.7175V12.0918Z"
                    stroke="white"
                    stroke-width="1.19"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.2056 12.0918V21.7175L19.4113 16.2747L10.2056 12.0918Z"
                    stroke="white"
                    stroke-width="1.19"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.2056 12.0915L19.4113 16.2743L10.2056 1V12.0915Z"
                    stroke="white"
                    stroke-width="1.19"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.2058 23.4653L1 18.0225L10.2058 30.9997V23.4653Z"
                    stroke="white"
                    stroke-width="1.19"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.2056 23.4653V30.9997L19.4199 18.0225L10.2056 23.4653Z"
                    stroke="white"
                    stroke-width="1.19"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="futurre">
                {" "}
                <h1 className="ms-4 ms-lg-5">Scaling Freedom</h1>
                <p  className="ms-4 ms-lg-5">
                  zkSync Era is a Layer-2 protocol that scales Ethereum with
                  cutting-edge ZK tech. Our mission is not only to merely
                  increase Ethereum's throughput, but to fully preserve its
                  foundational values – freedom, self-sovereignty,
                  decentralization – at scale
                </p>
                <button className="start_btn  ms-4 ms-lg-5">
                  <span className="gol">
                    <IoIosArrowForward></IoIosArrowForward>
                  </span>
                  Ethos & Values of zkSync
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4 mt-md-0">
            <div className="free_right text-center">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
