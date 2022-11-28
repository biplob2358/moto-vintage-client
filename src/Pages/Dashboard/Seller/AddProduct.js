import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthProvider';


const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();



    const { data: sellers = [], isLoading } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch(`https://moto-vintage-server.vercel.app/users?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <div className='grid h-96 justify-items-center content-center'>
            <progress className="progress w-56 flex "></progress>
        </div>
    }


    const handleAddBike = data => {
        if (!sellers[0]?.isVerified) {
            sellers[0].isVerified = false
        }
        const date = new Date();
        const advDate = new Date();
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                const bikes = {
                    sellerName: sellers[0].name,
                    email: sellers[0].email,
                    isVerified: sellers[0].isVerified,
                    img: imgData.data.url,
                    category_id: data.category,
                    bikeName: data.bikeName,
                    originalPrice: data.originalPrice,
                    resaleValue: data.resaleValue,
                    condition: data.condition,
                    usedYears: data.usedYears,
                    phone: data.phone,
                    location: data.location,
                    description: data.description,
                    purchaseYear: data.purchaseYear,
                    date: date,
                    advDate: advDate,
                    advertise: false,
                    soldOut: false,
                    report: false,
                }
                fetch('https://moto-vintage-server.vercel.app/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(bikes)
                })
                    .then(res => res.json())
                    .then(result => {


                        if (result.acknowledged) {
                            toast.success('New product is added successfully');
                            reset()
                            navigate('/dashboard/myproduct')
                        }


                    })

            })

    }





    return (

        <div>
            <h2 className="text-3xl mt-4 text-center font-bold">Add A Bike</h2>
            <div className=' p-7 mb-10 border-solid border-2 mt-7 mx-10 border-blue-200 drop-shadow-lg rounded'>

                <form onSubmit={handleSubmit(handleAddBike)}>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Bike Category</span>
                            </label>

                            <select className="select select-bordered"
                                {...register("category", { required: "Type is required" })}>
                                <option value={"1"}>Honda</option>
                                <option value={"2"}>Yamaha</option>
                                <option value={"3"}>Royel Enfield</option>

                            </select>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Bike Name</span></label>
                            <input type="text"
                                {...register("bikeName", { required: "Bike name is required" })}
                                className="input input-bordered w-full  " />
                            {errors.bikeName && <p className='text-red-600'>{errors.bikeName?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Orginal Price</span></label>
                            <input type="text"
                                {...register("originalPrice", { required: "Price is required" })}
                                className="input input-bordered w-full  " />
                            {errors.originalPrice && <p className='text-red-600'>{errors.originalPrice?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Resale Price</span></label>
                            <input type="text"
                                {...register("resaleValue", { required: "Price is required" })}
                                className="input input-bordered w-full  " />
                            {errors.resaleValue && <p className='text-red-600'>{errors.resaleValue?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Condition</span>
                            </label>

                            <select className="select select-bordered"
                                {...register("condition", { required: "Condition is required" })}>
                                <option value={"Excellent"}>Excellent</option>
                                <option value={"Good"}>Good</option>
                                <option value={"Fair"}>Fair</option>

                            </select>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Purchase year</span></label>
                            <input type="text"
                                {...register("purchaseYear", { required: "Used Year is required" })}
                                className="input input-bordered w-full  " />
                            {errors.purchaseYear && <p className='text-red-600'>{errors.purchaseYear?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Year of used</span></label>
                            <input type="text"
                                {...register("usedYears", { required: "Used Year is required" })}
                                className="input input-bordered w-full  " />
                            {errors.usedYears && <p className='text-red-600'>{errors.usedYears?.message}</p>}
                        </div>

                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Phone</span></label>
                            <input type="text"
                                {...register("phone", { required: "Phone number is required" })}
                                className="input input-bordered w-full  " />
                            {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Location</span></label>
                            <input type="text"
                                {...register("location", { required: "Location is required" })}
                                className="input input-bordered w-full  " />
                            {errors.location && <p className='text-red-600'>{errors.location?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Description</span></label>
                            <textarea type="text"
                                {...register("description", { required: "Description is required" })}
                                className="input input-bordered w-full  " />
                            {errors.description && <p className='text-red-600'>{errors.description?.message}</p>}
                        </div>


                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Bike Photo</span></label>
                            <input type="file"
                                {...register("img", { required: "Bike photo is required" })}
                                className="input input-bordered w-full  " />
                            {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
                        </div>
                    </div>





                    <input className='btn btn-primary mt-4 flex bg-blue-500 w-72 mx-auto' type="submit" value="Add New" />
                </form>

            </div>
        </div>
    );
};

export default AddProduct;