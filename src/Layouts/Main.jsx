import React from 'react';
import '../index.css'
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <Container>
            <Header></Header>
           
                <Outlet>

                </Outlet>
            
            <Footer></Footer>
        </Container>
    );
};

export default Main;