import React from 'react'
import "./Endgame.css"
import end from "../Assets/gatee.png"
import {IoIosArrowForward} from "react-icons/io"

export default function Endgame() {
  return (
    <div className='main_endgame'>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5">
          <div className="content_freedom">

          <h1>Hyperscalability: the Endgame</h1>
          <p >To meet web3's exponential demand, blockchains needs to scale like the Internet: processing an unlimited number of transactions without a marginal impact on security or cost. We call this property hyperscalability, and this is the ultimate goal of Era's design.</p>
          
          <button className="start_btn">
                    <span className="gol"><IoIosArrowForward></IoIosArrowForward></span>
                    Explore Hyperscalability
                </button>
          </div>
            
          </div>

          <div className="col-md-6">
          {/* <div className="free_right text-center">
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

          </div> */}
          <img src={end} className='w-100' alt="" />

          </div>
        </div>
      </div>
    </div>
  )
}
