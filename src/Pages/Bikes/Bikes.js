import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Bike from './Bike';

const Bikes = () => {
    const bikes = useLoaderData()
    return (
        <div className='container mx-auto my-8'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
                {
                    bikes.map(bike => <Bike key={bike._id} bike={bike}></Bike>)
                }

            </div>
        </div>
    );
};

export default Bikes;