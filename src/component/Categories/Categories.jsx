import React from 'react';
import '../../index.css'
import { NavLink } from 'react-router-dom';

const Categories = ({ category }) => {
    const { name , id} = category;
    return (
        <div className='my-3'>
            <NavLink to={`/category/${id}`} className={({isActive}) => (isActive ? 'side-active' : 'side-default')}>{name}</NavLink>
        </div>
    );
};

export default Categories;