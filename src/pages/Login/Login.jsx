import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye , FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [isShow , setIsShow] = useState(false);
    const [type , setType] = useState('password');

    const handleTypeText = ()=>{
        setType('text')
    } 
    const handleTypePass = ()=>{
        setType('password')
    } 

    return (
        <main>
            <section className='d-flex my-5 py-5  align-items-center justify-content-center'>
                <div className=' shadow  py-4 px-5 rounded-1 container-fluid'>
                    <h5 className='fw-bold mb-5 text-center'>Login your account</h5>
                    <hr />
                    <div className='mt-5 d-flex justify-content-center'>
                        <form>
                            <label className='fw-semibold mb-2'>
                                Email address:
                            </label>
                            <br />
                            <input type="email" name="email" placeholder="Email" required className='w-100 py-2 px-3 border-0 bg-secondary bg-opacity-10 rounded-1  placeholder-glow '/>
                            <br />
                            <label className='fw-semibold mt-3 mb-2'>
                                Password:
                                
                            </label>
                            <br />
                            <div className='d-flex'>
                            <input type={type} name="password" placeholder="Password" required className='w-100 py-2 px-3 border-0 bg-secondary bg-opacity-10 rounded-1  placeholder-glow '/>
                            <span onClick={()=>setIsShow(!isShow)} className='btn position-relative relative-pos'>
                            {
                                isShow ? <FaEyeSlash onClick={handleTypePass}/> : <FaEye onClick={handleTypeText}/>
                            }
                            </span>
                            </div>
                            
                            <button type="submit" className='w-100 btn btn-dark mt-4 mb-2 rounded-1'>Login</button>
                            <br />
                            <div className='text-center mt-4'>
                            <span className='btn mb-2'>Forgot Password?</span>
                            <p>Don't have an account? <Link to='/register' className='text-danger text-decoration-none'>Register</Link></p>
                            </div>
                        </form>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default Login;