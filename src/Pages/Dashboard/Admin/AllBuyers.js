import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {
    const { data: buyers = [] } = useQuery({
        queryKey: ['buyer'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allusers?role=buyer');
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
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            buyers.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>{buyer.role}</td>
                                <td> <button className="btn bg-red-400 btn-xs">Delete</button> </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;