import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { name, img, category_id } = category;


    return (
        <div className='mb-4  mx-auto'>
            <div className="card w-80 bg-base-100 shadow-xl gap-4">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl h-24" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold">{name}</h2>
                    <div className="card-actions">
                        <Link to={`/categories/${category_id}`}><button className="btn btn-primary">See Products</button></Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Category;