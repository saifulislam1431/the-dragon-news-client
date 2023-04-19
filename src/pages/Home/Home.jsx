import React from 'react';
import { Col, Row } from 'react-bootstrap';
import LeftNav from '../Shared/LeftNav/LeftNav';
import RightNav from '../Shared/RightNav/RightNav';

const Home = () => {
    return (
        <Row>
            <Col lg={3}>
                <LeftNav></LeftNav>
            </Col>
            <Col lg={6}>
                <h2>Main content coming..</h2>
            </Col>
            <Col lg={3}>
                <RightNav></RightNav>
            </Col>
        </Row>
    );
};

export default Home;