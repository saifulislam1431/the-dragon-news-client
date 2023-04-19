import React, { useEffect, useState } from 'react';
import Categories from '../../../component/Categories/Categories';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
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
        </section>
    );
};

export default LeftNav;