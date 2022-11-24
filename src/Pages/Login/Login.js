import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import GoogleLogin from '../Shared/GoogleLogin/GoogleLogin';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-96 p-7 border-solid border-2 border-blue-200 drop-shadow-lg rounded'>
                <h2 className='text-4xl text-center font-bold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email"
                            {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full max-w-xs " />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
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
                <p>New to Moto Vintage? <Link to='/signup' className='text-primary'>Create New Account </Link> </p>
                <div className="divider">OR</div>
                <div>
                    <GoogleLogin></GoogleLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;