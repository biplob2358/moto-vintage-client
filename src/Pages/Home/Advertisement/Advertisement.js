import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Advertisement = () => {
    const url = ('https://moto-vintage-server.vercel.app/allbikes')
    const { data: bike = [], isLoading } = useQuery({
        queryKey: ['bike'],
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
        <>
            {
                bike[0]?.advertise &&
                <div className='my-12 '>

                    <div className=''>
                        <h2 className='text-4xl  text-blue-600 text-center mt-4 font-bold'>Tranding Now 🔥</h2>
                        <div className="hero mt-4  rounded-lg  bg-base-200">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={bike[0].img} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                                <div>
                                    <h1 className="text-5xl font-bold">{bike[0].bikeName} ({bike[0].purchaseYear}) </h1>
                                    <p className='text-2xl'>Showroom Price : <s className='text-2xl font-bold text-red-700'>{bike[0].originalPrice}</s> BDT </p>
                                    <p className='text-2xl'>Our Price : <span className='text-3xl text-green-600 font-bold'>{bike[0].resaleValue}</span> BDT </p>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            }


        </>
    );
};

export default Advertisement;