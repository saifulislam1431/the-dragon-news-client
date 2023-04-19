import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';

const Router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path: "/category/0",
                element: <Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ]
    }
])
export default Router;