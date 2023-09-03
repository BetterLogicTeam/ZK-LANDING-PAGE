import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <div className='footer_main'>
    <div className="container py-5">
        <div className="row justify-content-around">
            <div className="col-md-2">
                <h6 className='footer_header'>Learn</h6>
                <a className='footer_links' href="">Ethos & Values</a>
                <a className='footer_links' href="">Hyperscalability</a>
                <a className='footer_links' href="">Security</a>
                <a className='footer_links' href="">UX</a>
            </div>
            <div className="col-md-2">
                <h6 className='footer_header'>Build on Era</h6>
                <a className='footer_links' href="">GitHub</a>
                <a className='footer_links' href="">Quickstart</a>
                <a className='footer_links' href="">Documentation</a>
                <a className='footer_links' href="">Web3 API & SDKs</a>
                <a className='footer_links' href="">Tools </a>
            </div>
            <div className="col-md-2">
                <h6 className='footer_header'>Era Network</h6>
                <a className='footer_links' href="">Bridge</a>
                <a className='footer_links' href="">Ecosystem</a>
                <a className='footer_links' href="">Wallet Portal</a>
                <a className='footer_links' href="">Block Explorer</a>
                
            </div>
            <div className="col-md-2">
                <h6 className='footer_header'>Community</h6>
                <a className='footer_links' href="">Discord</a>
                <a className='footer_links' href="">Twitter</a>
                <a className='footer_links' href="">Blog</a>
                <a className='footer_links' href="">Telegram</a>
                
            </div>
            <div className="col-md-2">
                <h6 className='footer_header'>General</h6>
                <a className='footer_links' href="">Careers at Matter Labs</a>
                <a className='footer_links' href="">Contact us</a>
                <a className='footer_links' href="">Brand assets</a>
                <a className='footer_links' href="">Terms of service</a>
                <a className='footer_links' href="">Privacy policy</a>
                <a className='footer_links' href="">Cookie policy</a>
                <a className='footer_links' href="">API License</a>
                
            </div>
        </div>
    </div>


    <div className="container last_copyright text-start">

    <p>© 2023 Matter Labs | All rights reserved</p>

    </div>

    
    </div>
  )
}
