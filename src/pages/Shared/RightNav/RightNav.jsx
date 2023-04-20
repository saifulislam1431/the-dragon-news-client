import React, { useContext } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import facebook from '../../../assets/facebook.png';
import twitter from '../../../assets/twitter.png';
import instagram from '../../../assets/instagram.png';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
import bg from '../../../assets/bg.png';
import { UserContext } from '../../../AuthProviders/AuthProvider';
import { toast } from 'react-toastify';

const RightNav = () => {
    const { googleSignIn, githubSignIn, user } = useContext(UserContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                toast.success('Sign In Successful!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
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
    const handleGithubSignIn = () => {
        githubSignIn()
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
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

    return (
        <section>
            {
                user ? '' :
                    <>
                        <h5 className='fw-bolder'>Login With</h5>
                        <div className='d-flex flex-column'>

                            <Button variant="outline-primary" className='my-3' onClick={handleGoogleSignIn}><FaGoogle /> Login With Google</Button>

                            <Button variant="outline-dark" onClick={handleGithubSignIn}><FaGithub /> Login With Github</Button>
                        </div>
                    </>
            }

            <div className='mt-5 mb-3'>
                <h5 className='fw-bolder'>Find Us On</h5>

                <div className='mt-3'>
                    <ListGroup className='fw-semibold'>
                        <ListGroup.Item action href="#">
                            <img src={facebook} alt="" className='me-2' />
                            Facebook
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                            <img src={twitter} alt="" className='me-2' />
                            Twitter
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                            <img src={instagram} alt="" className='me-2' />
                            Instagram
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>

            <div className='mt-4 bg-secondary bg-opacity-10 p-3 rounded-1'>
                <h6 className='fw-bold mb-3'>Q-Zone</h6>
                <div className='text-center'>
                    <img src={qZone1} alt="" className='w-100' />
                    <img src={qZone2} alt="" className='w-100' />
                    <img src={qZone3} alt="" className='w-100' />
                </div>
            </div>
            <div className='mt-5'>
                <Card className="text-white">
                    <Card.Img src={bg} alt="Card image" />
                    <Card.ImgOverlay className='text-center'>
                        <div className='mt-3 pt-4'>
                            <h2 className='fw-bolder mb-4'>Create an Amazing Newspaper</h2>
                            <p>
                                Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                            </p>
                            <button className='btn btn-danger py-2 rounded-0 mt-3'>Learn More</button>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </section >
    );
};

export default RightNav;