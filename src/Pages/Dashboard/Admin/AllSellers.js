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
            {
                sellers.map(seller => <p>{seller.name}</p>)
            }
        </div>
    );
};

export default AllSellers;