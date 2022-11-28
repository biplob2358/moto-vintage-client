import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const url = `https://moto-vintage-server.vercel.app/bookings?email=${user?.email}`;


    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <div className='grid h-96 justify-items-center content-center'>
            <progress className="progress w-56 flex "></progress>
        </div>
    }

    return (
        <div >
            <h3 className="text-3xl text-center my-4 font-bold">My Orders</h3>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mb-4'>
                {
                    bookings.length > 0 &&
                    bookings?.map(booking =>
                        <MyOrder
                            key={booking._id}
                            booking={booking}
                        ></MyOrder>)
                }
            </div>
        </div>
    );
};

export default MyOrders;