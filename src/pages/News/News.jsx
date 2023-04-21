import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Insight from '../Insight/Insight';

const News = () => {
    const news = useLoaderData();
    const { title, image_url, details, category_id } = news;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body className='my-4'>
                    <Card.Title className='mb-3'>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger">
                            <FaArrowLeft />  All news in this category</Button>
                    </Link>
                </Card.Body>
            </Card>
            <div className='mt-5'>
            <Insight></Insight>
            </div>
        </div>
    );
};

export default News;