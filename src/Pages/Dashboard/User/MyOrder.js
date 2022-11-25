import React from 'react';

const MyOrder = ({ booking }) => {
    const { img, bikeName, resaleValue } = booking;
    console.log(booking)
    return (
        <div>
            <div className="card w-100 mx-8 bg-base-100 shadow-xl">
                <figure><img className='w-4/5 rounded-lg' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{bikeName}</h2>
                    <p>Price:{resaleValue}</p>
                    <div className="card-actions justify-end">
                        <button className="btn w-48 mx-auto btn-primary">Pay</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyOrder;