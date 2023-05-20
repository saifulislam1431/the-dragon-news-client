import React from 'react';
import logo from "../../../assets/logo.png"

const Footer = () => {
    return (
        <footer className="d-flex flex-column gap-5 flex-lg-row p-5 bg-light text-base-content mt-5">
  <div>
    <img src={logo} alt="Logo" className='w-75 mb-2'/>
    <p><span className='fw-semibold'>The Dragon News.</span><br/>Providing trusted news since 2023</p>
    <p>Copyright © 2023 - All right reserved by Dragon News</p>
  </div> 
  <div className='d-grid'>
    <span className="fw-bold text-black-50">Services</span> 
    <a className=" text-black text-decoration-none">Branding</a> 
    <a className=" text-black text-decoration-none">Design</a> 
    <a className=" text-black text-decoration-none">Marketing</a> 
    <a className=" text-black text-decoration-none">Advertisement</a>
  </div> 
  <div className='d-grid'>
    <span className="fw-bold text-black-50">Company</span> 
    <a className="text-black text-decoration-none">About us</a> 
    <a className="text-black text-decoration-none">Contact</a> 
    <a className="text-black text-decoration-none">Jobs</a> 
    <a className="text-black text-decoration-none">Press kit</a>
  </div> 
  <div className='d-grid'>
    <span className="fw-bold text-black-50">Legal</span> 
    <a className="text-black text-decoration-none">Terms of use</a> 
    <a className="text-black text-decoration-none">Privacy policy</a> 
    <a className="text-black text-decoration-none">Cookie policy</a>
  </div>
</footer>
    );
};

export default Footer;