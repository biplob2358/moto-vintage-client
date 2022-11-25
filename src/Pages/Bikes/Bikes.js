import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Bike from './Bike';
import BookingModal from './BookingModal/BookingModal';

const Bikes = () => {
    const bikes = useLoaderData()
    const [bookBike, setBookBike] = useState(null);

    return (
        <div className='container mx-auto my-8'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
                {
                    bikes.map(bike =>
                        <Bike key={bike._id}
                            bike={bike}
                            setBookBike={setBookBike}>
                        </Bike>)
                }

            </div>
            {
                bookBike &&
                <BookingModal
                    setBookBike={setBookBike}
                    bookBike={bookBike}
                ></BookingModal>}
        </div>
    );
};

export default Bikes;