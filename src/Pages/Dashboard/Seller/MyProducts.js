import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: bikes = [] } = useQuery({
        queryKey: ['bikes'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/product?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
            <h2 className="text-3xl text-center my-4 font-bold">My Product</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Condition</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            bikes.map((bike, i) => <tr key={bike._id}>
                                <th>{i + 1}</th>
                                <td>{bike.bikeName}</td>
                                <td>{bike.resaleValue}</td>
                                <td>{bike.condition}</td>
                                <td>
                                    {
                                        bike?.soldOut ? <p>Sold Out</p>
                                            : <>
                                                <button className="btn bg-green-400 btn-xs">Advertise</button>
                                            </>
                                    }
                                </td>
                                <td> <button className="btn bg-red-400 btn-xs">Delete</button> </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;