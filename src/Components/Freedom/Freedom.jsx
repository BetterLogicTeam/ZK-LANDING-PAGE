import React from "react";
import "./Freedom.css";
import {IoIosArrowForward} from "react-icons/io"
export default function Freedom() {
  return (
    <div className="main_freedom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
          <div className="content_freedom">

          <h1>Scaling Freedom</h1>
          <p >zkSync Era is a Layer-2 protocol that scales Ethereum with cutting-edge ZK tech. Our mission is not only to merely increase Ethereum's throughput, but to fully preserve its foundational values – freedom, self-sovereignty, decentralization – at scale</p>
          
          <button className="start_btn">
                    <span className="gol"><IoIosArrowForward></IoIosArrowForward></span>
                    Ethos & Values of zkSync
                </button>
          </div>
            
          </div>

          <div className="col-md-6 mt-4 mt-md-0">
          <div className="free_right text-center">
          <h6 className="fw-bold text-center">
          We stand for
          </h6>

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
