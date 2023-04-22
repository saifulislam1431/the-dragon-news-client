import React, { useContext } from 'react';
import { UserContext } from '../AuthProviders/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRouter = ({ children }) => {
    // const navigate = useNavigate();
    const location = useLocation();
    // console.log(location); 
    const { user,loading } = useContext(UserContext);
    if(loading){
        return <Spinner animation="grow" variant="danger" />

    }
    if (user) {
        return children;
    }
    return <Navigate to="/form/login" state={{from:location}} replace></Navigate> 
};

export default PrivateRouter;