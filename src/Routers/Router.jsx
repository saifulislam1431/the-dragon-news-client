import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';
import NewsLayout from '../Layouts/NewsLayout';
import News from '../pages/News/News';
import Category from '../component/category/Category';
import LoginRegisterLayout from '../Layouts/LoginRegisterLayout';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/category/:id",
                element: <Category></Category>,
                loader: ({params})=> fetch(`https://the-dragon-news-server-rho.vercel.app/categories/${params.id}`)
            },
            
           
        ]
    },
    {
        path: "/news",
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: "/news/:id",
                element: <News></News>,
                loader: ({params})=> fetch(`https://the-dragon-news-server-rho.vercel.app/news/${params.id}`)
            }
        ]
    },
    {
      
            
      path: "/form",
      element:<LoginRegisterLayout></LoginRegisterLayout>,
      children:[
        {
            path: "/form/login",
            element: <Login></Login>
        },
        {
            path: "/form/register",
            element: <Register></Register>
        }
      ]
      
    }
])
export default Router;