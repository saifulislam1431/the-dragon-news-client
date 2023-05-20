import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleNews from '../../pages/SingleNews/SingleNews';

const Category = () => {
    const[showAll , setShowAll] = useState(false);
    const {id} = useParams();
    const categoriesNews = useLoaderData();
    return (
        <div>
            <h5 className='fw-bold mb-5 text-center'>Dragon News</h5>
            {
                categoriesNews.slice(0,showAll ? 10 : 3).map(news => <SingleNews
                key={news._id}
                news={news}
                ></SingleNews>)
            }
            {
                !showAll && <div className="my-4 text-center">
                <button className='px-2 py-1 bg-danger text-white border-danger rounded-1' onClick={()=>setShowAll(!showAll)}>Show More</button>

            </div>
            }
        </div>
    );
};

export default Category;