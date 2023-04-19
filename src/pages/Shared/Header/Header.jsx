import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment/moment';
const Header = () => {
    return (
        <header>
            <div className="top-nav text-center pt-4">
             <img src={logo} alt="" className='img-fluid'/>
               <p className='text-secondary fw-semibold pt-2'>Journalism Without Fear or Favour</p>
               <p className='text-secondary'><span className='fw-bold'>{moment().format('dddd')},</span> <span className='fw-semibold'>{moment().format("MMMM D, YYYY")}</span></p>
            </div>
        </header>
    );
};

export default Header