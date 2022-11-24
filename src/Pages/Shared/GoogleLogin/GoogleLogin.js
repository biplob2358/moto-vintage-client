import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const GoogleLogin = () => {
    return (
        <div>
            <button className="d-block w-full  mx-auto btn bg-dark-200 border border-primary mb-2">
                <FcGoogle></FcGoogle>
                <span className="ms-2">Continue With Google</span>
            </button>

        </div>
    );
};

export default GoogleLogin;