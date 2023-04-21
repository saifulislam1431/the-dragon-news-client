import React, { useEffect, useState } from 'react';
import Categories from '../../../component/Categories/Categories';
import { Card, Col, Row } from 'react-bootstrap';
import img1 from '../../../assets/1.png';
import img2 from '../../../assets/2.png';
import img3 from '../../../assets/3.png';
import { FaCalendar, FaCalendarAlt } from 'react-icons/fa';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://the-dragon-news-server-rho.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <section>

            <h5 className='fw-bolder'>All Category</h5>
            <div className='my-3'>
                {
                    categories.map(category => <Categories
                        key={category.id}
                        category={category}
                    ></Categories>)
                }
            </div>
            <div className='mt-5'>
                <Row xs={1} md={1} lg={1} className="g-4">

                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                                <Card.Text className='mt-4 d-flex justify-content-between'>
                                    <div>
                                        <p className='fw-semibold'>Sports</p>
                                    </div>
                                    <div>
                                        <FaCalendarAlt /> Jan 4, 2022
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                                <Card.Text className='mt-4 d-flex justify-content-between'>
                                    <div>
                                        <p className='fw-semibold'>Sports</p>
                                    </div>
                                    <div>
                                        <FaCalendarAlt /> Jan 4, 2022
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                                <Card.Text className='mt-4 d-flex justify-content-between'>
                                    <div>
                                        <p className='fw-semibold'>Sports</p>
                                    </div>
                                    <div>
                                        <FaCalendarAlt /> Jan 4, 2022
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </div>
        </section>
    );
};

export default LeftNav;