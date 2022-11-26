import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { MdVerified } from 'react-icons/md';

const AllSellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allusers?role=seller');
            const data = await res.json();
            return data;
        }
    });

    const handleVerified = (id, email) => {
        fetch(`http://localhost:5000/allusers/seller/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    fetch(`http://localhost:5000/allproducts?email=${email}`)

                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            toast.success('Seller Verified successful.')
                            refetch();

                        })

                }
            })

    }


    return (
        <div>
            <h2 className="text-3xl text-center my-4 font-bold">All Seller</h2>
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
                                <td>
                                    {
                                        seller?.isVerified ?
                                            <div><p className='flex items-center'>Verified <span className='text-green-600'> <MdVerified></MdVerified> </span></p> </div>
                                            : <button onClick={() => handleVerified(seller._id, seller.email)} className="btn  shadow-lg bg-green-400 btn-xs">make verified</button>

                                    } </td>
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