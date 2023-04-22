import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext } from 'react';
import { UserContext } from '../../AuthProviders/AuthProvider';
import { toast } from 'react-toastify';
import { useRef } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);
    const from = location?.state?.from?.pathname || "/";

    const { logInUser, resetPassword } = useContext(UserContext);
    const [isShow, setIsShow] = useState(false);
    const [type, setType] = useState('password');
    const emailRef = useRef();

    const handleTypeText = () => {
        setType('text')
    }
    const handleTypePass = () => {
        setType('password')
    }



    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        handleResetPass(email)

        logInUser(email, password)
            .then(res => {
                const registeredUser = res.user;
                console.log(registeredUser);
                toast.success('You have successfully registered', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(error => {
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
    const handleResetPass = () => {
        const email = emailRef.current.value;
        resetPassword(email)
            .then(() => {
                toast.success('Password reset email sent!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }).catch(error => {
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
        <main>
            <section className='d-flex my-5 py-5  align-items-center justify-content-center'>
                <div className=' shadow  py-4 px-5 rounded-1 container-fluid'>
                    <h5 className='fw-bold mb-5 text-center'>Login your account</h5>
                    <hr />
                    <div className='mt-5 d-flex justify-content-center'>
                        <form onSubmit={handleLogIn}>
                            <label className='fw-semibold mb-2'>
                                Email address:
                            </label>
                            <br />
                            <input type="email" name="email" placeholder="Email" 
                            ref={emailRef}
                            required className='w-100 py-2 px-3 border-0 bg-secondary bg-opacity-10 rounded-1  placeholder-glow ' />
                            <br />
                            <label className='fw-semibold mt-3 mb-2'>
                                Password:

                            </label>
                            <br />
                            <div className='d-flex'>
                                <input type={type} name="password" placeholder="Password" required className='w-100 py-2 px-3 border-0 bg-secondary bg-opacity-10 rounded-1  placeholder-glow ' />
                                <span onClick={() => setIsShow(!isShow)} className='btn position-relative relative-pos'>
                                    {
                                        isShow ? <FaEyeSlash onClick={handleTypePass} /> : <FaEye onClick={handleTypeText} />
                                    }
                                </span>
                            </div>

                            <button type="submit" className='w-100 btn btn-dark mt-4 mb-2 rounded-1'>Login</button>
                            <br />
                            <div className='text-center mt-4'>
                                <span className='btn mb-2' onClick={handleResetPass}>Forgot Password?</span>
                                <p>Don't have an account? <Link to='/form/register' className='text-danger text-decoration-none'>Register</Link></p>
                            </div>
                        </form>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default Login;