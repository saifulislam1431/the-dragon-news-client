import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Register = () => {
    const [isShow, setIsShow] = useState(false);
    const [type, setType] = useState('password');

    const handleTypeText = () => {
        setType('text')
    }
    const handleTypePass = () => {
        setType('password')
    }

    return (
        <main>
            <section className='d-flex my-5 py-5  align-items-center justify-content-center'>
                <div className=' shadow  py-4 px-5 rounded-1 w-50'>
                    <h5 className='fw-bold mb-5 text-center'>Register your account</h5>
                    <hr />
                    <div className='mt-5 d-flex justify-content-center'>
                        <form>
                            <label className='fw-semibold mb-2 mt-3'>
                                Your Name:
                            </label>
                            <br />
                            <input type="text" name="username" placeholder="Your Name" required className='w-100 py-2 px-3 border-0 bg-secondary bg-opacity-10 rounded-1  placeholder-glow ' />
                            <br />
                            <label className='fw-semibold mb-2 mt-4'>
                                Photo URL:
                            </label>
                            <br />
                            <input type="url" name="photoUrl" placeholder="https://example.com/image.png" required className='w-100 py-2 px-3 border-0 bg-secondary bg-opacity-10 rounded-1  placeholder-glow ' />

                            <br />
                            <label className='fw-semibold mb-2 mt-4'>
                                Email address:
                            </label>
                            <br />
                            <input type="email" name="email" placeholder="Email" required className='w-100 py-2 px-3 border-0 bg-secondary bg-opacity-10 rounded-1  placeholder-glow ' />
                            <br />
                            <label className='fw-semibold mt-4 mb-2'>
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

                            <label className='mt-3'>
                                    <input type="checkbox" name="terms" required className='me-2'/> 
                                    I accept the terms & conditions.
                                </label>

                            <button type="submit" className='w-100 btn btn-dark mt-4 mb-2 rounded-1'>Register</button>
                            <br />
                            <div className='text-center mt-4'>
                                <p>Already have an account? <Link to='/login' className='text-success text-decoration-none'>Login</Link></p>
                            </div>
                        </form>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default Register;