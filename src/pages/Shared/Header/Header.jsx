import React, { useContext } from 'react';
import '../../../index.css'
import logo from '../../../assets/logo.png';
import moment from 'moment/moment';
import Marquee from "react-fast-marquee";
import profile from '../../../assets/profile-user.png'
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../../AuthProviders/AuthProvider';
import { toast } from 'react-toastify';

const Header = () => {
    const {user,logOut} = useContext(UserContext);
    const handleLogOut = () =>{
        logOut()
        .then(()=>{
            toast.success('Sign In Successful!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        })
        .catch(error=>{
            toast.error(error.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        })
    }
    return (
        <header className='py-3 container-fluid'>
            <div>
            <div className="top-nav text-center pt-4">
                <img src={logo} alt="" className='img-fluid' />
                <p className='text-secondary fw-semibold pt-2'>Journalism Without Fear or Favour</p>
                <p className='text-secondary'><span className='fw-bold'>{moment().format('dddd')},</span> <span className='fw-semibold'>{moment().format("MMMM D, YYYY")}</span></p>
            </div>
            <div className="latest-news my-3 d-inline-flex align-items-center bg-secondary bg-opacity-10 p-3 container-fluid overflow-hidden">
                <div>
                    <button className='btn btn-danger fw-semibold rounded-1 px-4'>Latest</button>
                </div>
                <div >
                    <Marquee gradientColor={0} pauseOnHover={true} className='fw-semibold'>
                        Match Highlights: Germany vs Spain — as it happened   !
                        <span className='mx-5'>
                            I can be a React component, multiple React components, or just some text.
                        </span>
                        <span>
                            Match Highlights: Germany vs Spain as...
                        </span>
                    </Marquee>
                </div>

            </div>
            <nav className='my-3 d-flex align-items-center justify-content-end'>
                <div className='me-5'>
                    <div>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'default')}>About</NavLink>
                        <NavLink to="/career" className={({ isActive }) => (isActive ? 'active' : 'default')}>Career</NavLink>
                    </div>
                </div>
                <div>
                    <div className='d-flex align-items-center gap-1'>
                        {
                            user ? 
                            <div>
                            <img src={user.photoURL} alt="" className='w-75 rounded-circle'/>
                        </div>
                            :
                            <div>
                            <img src={profile} alt="" className='w-75'/>
                        </div>
                        }
                        {
                            user ? 
                            <button className='btn btn-warning rounded-0 px-4 py-1' onClick={handleLogOut}>Sign out</button>
                            : 
                            <Link to="/form/login">
                            <button className='btn btn-dark rounded-0 px-4 py-1'>Login</button>
                        </Link>
                        }
                    </div>
                </div>

            </nav>
            </div>
        </header>
    );
};

export default Header