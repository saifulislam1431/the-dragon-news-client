import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaRegBookmark, FaRegEye, FaRegStar, FaRegStarHalf, FaShareAlt, FaStar, FaStarHalf } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const SingleNews = ({ news }) => {
    const { _id, rating, total_view, title, author, image_url, details } = news;
    return (

        <Card className="mb-5">
            <Card.Header className='d-flex align-items-center'>
                <div className='flex-grow-1'>
                    <div className='d-flex gap-2'>
                        <div>
                            <Image style={{ height: "50px" }} src={author?.img} roundedCircle />
                        </div>
                        <div>
                            <p className='mb-0'>{author?.name}</p>
                            <p><small>{moment(author?.published_date).format("yyyy-MM-D")}</small></p>
                        </div>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-2' /> <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url ? image_url : 'News Cover'} className='my-4' />
                <Card.Text>
                    {details.length < 200 ? details : <>{details.slice(0, 200)}... <Link className='fw-semibold text-warning'>Read More</Link></>}
                </Card.Text>

            </Card.Body>
            <Card.Footer className="d-flex">
                <div className='d-flex align-items-center gap-1 flex-grow-1'>
                    <div>
                        <Rating
                            placeholderRating={rating?.number}
                            emptySymbol={<FaRegStar />}
                            placeholderSymbol={<FaStar className='text-warning' />}
                            fullSymbol={<FaStar />}
                            readonly
                        />
                    </div>
                    <div>
                        {rating?.number}
                    </div>
                </div>
                <div>
                    <FaRegEye /> {total_view? total_view : 0}
                </div>
            </Card.Footer>
        </Card>

    );
};

export default SingleNews;