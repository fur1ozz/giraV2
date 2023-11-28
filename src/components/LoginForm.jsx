import React, {useEffect, useState} from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        name: '',
        password: ''
    });

    const [error, setError] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        if (Object.values(touched).some((fieldTouched) => fieldTouched)) {
            validateForm(login);
        }
    }, [login, touched]);

    const validateNotEmpty = (value) => {
        return value.trim() === '' ? 'This field is required' : '';
    };

    const validateForm = (values) => {
        const validationFunctions = {
            name: (value) => validateNotEmpty(value),
            password: (value) => validateNotEmpty(value),
        };

        const updatedErrorState = {};
        Object.entries(values).forEach(([name, value]) => {
            updatedErrorState[name] = validationFunctions[name](value);
        });

        setError(updatedErrorState);

        return Object.values(updatedErrorState).every((errorMsg) => errorMsg === '');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));

        setLogin((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleLogin = () => {
        if (validateForm(login)) {
            fetch("http://localhost/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(login),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    if(data.name){
                        setError({
                            name: data.name
                        });
                    }else if(data.password){
                        setError({
                            password: data.password
                        });
                    }else{
                        setError({});
                        localStorage.setItem('token', data.token);
                        navigate('/ProjectCalendarPicker');
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            console.log('Form has errors. Cannot submit.');
        }
    }

    function parseJwt(token) {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return null;
        }
    }

    const handleSuccess = async (response) => {
        console.log('Google login successful! Access Token:', response);

        try {
            // Decode the JWT token to extract user information
            const jwtPayload = parseJwt(response.credential);

            // Check if the payload contains the necessary user information
            if (jwtPayload && jwtPayload.name && jwtPayload.email) {
                const userName = jwtPayload.name;
                const email = jwtPayload.email;

                const name = userName.split(' ')[0];

                console.log('User Name:', name);
                console.log('User Email:', email);

                fetch("http://localhost/api/googleLogin", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        if(data.token){
                            localStorage.setItem('token', data.token);
                            navigate("/ProjectCalendarPicker");
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            } else {
                throw new Error('Failed to extract user information from JWT payload');
            }
        } catch (error) {
            console.error('Error extracting user information', error.message);
        }
    };

    const handleError = (error) => {
        console.error('Google login error:', error);
    };

    return (
        <GoogleOAuthProvider clientId = '735145884155-nl0ud8bqmellii1ct67n7ki6k9gi7mbv.apps.googleusercontent.com'>
            <div className = "flex items-center w-full h-full">
                <div className = "flex flex-col text-4xl indent-4 w-full justify-center">
                    <h1 className = "text-gray-800 mb-5">Login</h1>
                    <input
                        type="text"
                        className='indent-2 rounded-lg border-2 border-pink-300 m-4 h-9 text-gray-400 text-lg bg-white focus:border-pink-600 transition duration-400 outline-none'
                        onChange={handleInputChange}
                        name = "name"
                        value = {login.name}
                        placeholder = "Username or email"
                    />
                    <p className = "text-lg text-pink-400">{error.name}</p>
                    <input
                        type="password"
                        className='indent-2 rounded-lg border-2 border-pink-300 m-4 h-9 text-gray-400 text-lg bg-white focus:border-pink-600 transition duration-400 outline-none'
                        onChange={handleInputChange}
                        name = "password"
                        value = {login.password}
                        placeholder = "Password..."
                    />
                    <p className = "text-lg text-pink-400">{error.password}</p>
                    <p className = "text-lg text-blue-400 underline hover:cursor-pointer" onClick={() => navigate('/ForgotPassword')}>Forgot password?</p>
                    <button
                        className = "border border-pink-800 m-4 h-8 text-lg bg-pink-500 text-white rounded-lg hover:bg-pink-300 transition duration-400"
                        onClick={handleLogin}
                    >
                        Sign in
                    </button>
                    <div className="flex items-center">
                        <div className="w-full border-t border-pink-800 mb-4"></div>
                        <h2 className = "flex text-center mb-4 mr-3 text-pink-800 text-xl justify-center">or</h2>
                        <div className="w-full border-t border-pink-800 mb-4"></div>
                    </div>
                    {/*<div className = "flex justify-center">*/}
                    {/*    <button*/}
                    {/*        onClick={handleGoogleLogin}*/}
                    {/*        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"*/}
                    {/*    >*/}
                    {/*        <div className="flex items-center justify-center">*/}
                    {/*            <img*/}
                    {/*                className="h-4 w-4 mr-2"*/}
                    {/*                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"*/}
                    {/*                alt="Google Logo"*/}
                    {/*            />*/}
                    {/*            <span className = "text-xl">Sign in with Google</span>*/}
                    {/*        </div>*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                    <div className = "flex justify-center">
                        <GoogleLogin onSuccess={handleSuccess} onError={handleError}/>
                    </div>
                </div>
            </div>
        </GoogleOAuthProvider>


    );
};

export default LoginForm;