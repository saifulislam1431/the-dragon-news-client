import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleNews from '../../pages/SingleNews/SingleNews';

const Category = () => {
    const {id} = useParams();
    const categoriesNews = useLoaderData();
    return (
        <div>
            <h5 className='fw-bold mb-5 text-center'>Dragon News</h5>
            {
                categoriesNews.map(news => <SingleNews
                key={news._id}
                news={news}
                ></SingleNews>)
            }
        </div>
    );
};

export default Category;