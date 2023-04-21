import React, { useState } from 'react';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext } from 'react';
import { UserContext } from '../../AuthProviders/AuthProvider';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';


const Register = () => {
    const {registerUser,profileUpdate} = useContext(UserContext);
   const navigate = useNavigate();
    const [isShow, setIsShow] = useState(false);
    const [type, setType] = useState('password');

    const handleTypeText = () => {
        setType('text')
    }
    const handleTypePass = () => {
        setType('password')
    }

    const handleRegister = (e)=>{
        e.preventDefault();
        const form = e.target;
        const photo = form.photoUrl.value;
        const name = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name , email ,password);

        if(password.length < 6){
           toast.error('Your password should minimum eight in length!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return ;
        }
        else if(!/(?=.*[A-Z])/.test(password)){
            toast.error('Your password should contain at least one upper case!', {
                 position: "top-center",
                 autoClose: 5000,
                 hideProgressBar: false,
                 closeOnClick: true,
                 pauseOnHover: true,
                 draggable: true,
                 progress: undefined,
                 theme: "light",
             });
             return ;
         }
         else if(!/(?=.*[0-9])/.test(password)){
            toast.error('Your password should contain at least one digit!', {
                 position: "top-center",
                 autoClose: 5000,
                 hideProgressBar: false,
                 closeOnClick: true,
                 pauseOnHover: true,
                 draggable: true,
                 progress: undefined,
                 theme: "light",
             });
             return ;
         }
         else if(!/(?=.*\W)/.test(password)){
            toast.error('Your password should contain at least one special character!', {
                 position: "top-center",
                 autoClose: 5000,
                 hideProgressBar: false,
                 closeOnClick: true,
                 pauseOnHover: true,
                 draggable: true,
                 progress: undefined,
                 theme: "light",
             });
             return ;
         };

         registerUser(email , password)
         .then(res=>{
            const registeredUser = res.user;
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
            profileUpdate(res.user)
            navigate("/");
            form.reset();
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

         const profileUpdate =(currentUser)=>{
            updateProfile(currentUser,{
                displayName: name , photoURL: photo
            }).then(()=>{
                console.log("Profile Update")
            }).catch(error=>{
                console.log(error.message);
            })
         }

         


    }
    return (
        <main>
            <section className='d-flex my-5 py-5  align-items-center justify-content-center'>
                <div className=' shadow  py-4 px-5 rounded-1 container-fluid'>
                    <h5 className='fw-bold mb-5 text-center'>Register your account</h5>
                    <hr />
                    <div className='mt-5 d-flex justify-content-center'>
                        <form onSubmit={handleRegister}>
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
                            <input type="url" name="photoUrl" placeholder="https://example.com/image.png"  className='w-100 py-2 px-3 border-0 bg-secondary bg-opacity-10 rounded-1  placeholder-glow ' />

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
                                <p>Already have an account? <Link to='/form/login' className='text-success text-decoration-none'>Login</Link></p>
                            </div>
                        </form>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default Register;