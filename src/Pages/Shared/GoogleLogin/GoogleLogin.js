import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useToken from '../../../hooks/useToken';


const GoogleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    const { googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);

    const from = location.state?.from?.pathname || "/";


    if (token) {
        navigate(from, { replace: true });

    }


    const handleGoogleSignIn = () => {
        googleLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setCreatedUserEmail(user?.email);
                saveUser(user.displayName, user.email, 'user');
                toast.success("Login successfull");

            })
            .catch((error) => console.error(error));
    };

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
                console.log(data);
            })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="d-block w-full  mx-auto btn bg-dark-200 border border-primary mb-2">
                <FcGoogle></FcGoogle>
                <span className="ms-2">Continue With Google</span>
            </button>

        </div>
    );
};

export default GoogleLogin;