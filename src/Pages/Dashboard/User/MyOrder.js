import React from 'react';
import { Link } from 'react-router-dom';

const MyOrder = ({ booking }) => {
    const { _id, img, bikeName, resaleValue } = booking;
    return (
        <div>
            <div className="card w-100 mx-8 bg-base-100 shadow-xl">
                <figure><img className='w-4/5 rounded-lg' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{bikeName}</h2>
                    <p>Price:{resaleValue}</p>
                    <div className="card-actions justify-center">
                        {
                            resaleValue && !booking.paid &&
                            <Link to={`/dashboard/payment/${_id}`}>
                                <button className="btn w-48 mx-auto btn-primary">Pay Now</button>
                            </Link>
                        }
                        {
                            resaleValue && booking.paid &&
                            <button disabled className="btn w-48 mx-auto btn-primary">Paid</button>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyOrder;