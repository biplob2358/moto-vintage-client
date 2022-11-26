import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const { data: sellers = [] } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allusers?role=seller');
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
            <h2>All Buyers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Action</th>


                        </tr>
                    </thead>
                    <tbody>

                        {
                            sellers.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller.role}</td>
                                <td> <button className="btn  shadow-lg bg-green-400 btn-xs">make verified</button> </td>
                                <td> <button className="btn  shadow-lg bg-red-400 btn-xs">Delete</button> </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;