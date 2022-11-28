import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';
import GoogleLogin from '../Shared/GoogleLogin/GoogleLogin';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
    useEffect(() => {
        if (token) {
            navigate('/');

        }

    }, [navigate, token])





    const handleSignUp = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                reset();
                toast.success('Sign Up successfull')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {

                        saveUser(data.name, data.email, data.role);

                    })
                    .catch(error => toast.error(error))
            })

            .catch(error => {
                toast.error(error.message);
            });
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    }

    return (
        <div>
            <div className='h-[800px] flex justify-center items-center '>
                <div className='w-96 p-7 border-solid border-2 border-blue-200 drop-shadow-lg rounded'>
                    <h2 className='text-4xl text-center font-bold'>Sign Up</h2>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input type="text"
                                {...register("name", { required: "Name is required" })}
                                className="input input-bordered w-full max-w-xs " />
                            {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email"
                                {...register("email", { required: "Email Address is required" })}
                                className="input input-bordered w-full max-w-xs " />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Are You</span>
                            </label>

                            <select className="select select-bordered"
                                {...register("role", { required: "Type is required" })}>
                                <option value={"buyer"}>Buyer</option>
                                <option value={"seller"}>Seller</option>
                            </select>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password"
                                {...register("password", { required: "Password is required" })}
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label"><span className="label-text">Forget Password?</span></label>
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        </div>

                        <input className='btn btn-primary bg-blue-500 w-full' type="submit" value="Login" />
                    </form>
                    <p>Already have an account?? <Link to='/login' className='text-primary'>SignUp </Link> </p>
                    <div className="divider">OR</div>
                    <div>
                        <GoogleLogin></GoogleLogin>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;