import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';

const LoginRegisterLayout = () => {
    return (
        <Container>
            <Header></Header>

            <Row>  
                <Col lg={9}>
                    <Outlet></Outlet>
                </Col>
            </Row>
            
        </Container>
    );
};

export default LoginRegisterLayout;