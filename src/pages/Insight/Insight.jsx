import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img1 from '../../assets/editorsInsight1.png';
import img2 from '../../assets/editorsInsight2.png';
import img3 from '../../assets/editorsInsight3.png';
import { FaCalendar, FaCalendarAlt } from 'react-icons/fa';

const Insight = () => {
    return (
       <div>
         <h5 className='fw-semibold mb-4'>Editors Insight</h5>
        <Row xs={1} md={2} lg={3} className="g-4">

            <Col>
                <Card>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        <Card.Text className='mt-4'>
                            <FaCalendarAlt /> Jan 4, 2022
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        <Card.Text className='mt-4'>
                            <FaCalendarAlt /> Jan 4, 2022
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        <Card.Text className='mt-4'>
                            <FaCalendarAlt /> Jan 4, 2022
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </Row>
       </div>
    );
};

export default Insight;