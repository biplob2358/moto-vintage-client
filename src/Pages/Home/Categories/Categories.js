import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Category from './Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/categories')
            .then(data => {
                setCategories(data.data)
                return setCategories;
            })
    }, [])
    return (
        <div className='mb-8 '>

            <h2 className='text-4xl underline text-blue-600 text-center mt-4 font-bold'>Top Bikes Brand</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2  mt-4  '>
                {
                    categories.map(category => <Category key={category._id} category={category} ></Category>)

                }
            </div>

        </div>
    );
};

export default Categories;