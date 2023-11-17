import React, {useEffect} from 'react';
import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";


const NewPassword = () => {
    const { token } = useParams();
    const navigate = useNavigate();

    const [password, setPassword] = useState({
        password: '',
        passwordc: ''
    });

    const [error, setError] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        if (Object.values(touched).some((fieldTouched) => fieldTouched)) {
            validateForm(password);
        }
    }, [password, touched]);

    const validateNotEmpty = (value) => {
        return value.trim() === '' ? 'This field is required' : '';
    };

    const validatePasswordc = (value) => {
        return value !== password.password ? 'Passwords do not match' : '';
    };

    const validatePassword = (value) => {
        return value.length < 8 ? 'Password too short' : '';
    };

    const validateForm = (values) => {
        const validationFunctions = {
            password: (value) => validateNotEmpty(value) || validatePassword(value),
            passwordc: (value) => validateNotEmpty(value) || validatePasswordc(value),
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

        setPassword((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        if(validateForm(password)){
            fetch("http://localhost/api/update-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(password),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    if(data.message){
                        navigate('/register');
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    return (
        <div className = "min-w-full  min-h-screen flex">
            <div className = "min-w-full min-h-full flex justify-center content-center items-center">
                <div className="xl:w-2/6 h-2/4 border-2 rounded-lg bg-white shadow-lg border-gray-300 lg:w-8/12 md:w-4/6 w-5/6">
                    <div className = "flex items-center w-full h-full bg-gray-50">
                        <div className = "flex flex-col text-4xl indent-4 w-full justify-center">
                            <h1 className = "text-gray-800 mb-5 md:text-4xl text-2xl">New password</h1>
                            <p className = "text-gray-500 md:text-2xl text-xl ml-5 mr-5">Think of a new password you wont forget this time!</p>
                            <input
                                type="password"
                                className='indent-2 rounded-lg border-2 border-green-400 m-4 h-9 text-gray-400 text-lg bg-white focus:border-green-600 transition duration-400 outline-none'
                                placeholder = "Password..."
                                value = {password.password}
                                name = "password"
                                onChange={handleInputChange}
                            />
                            <p className = "text-lg text-green-600">{error.password}</p>
                            <input
                                type="password"
                                className='indent-2 rounded-lg border-2 border-green-400 m-4 h-9 text-gray-400 text-lg bg-white focus:border-green-600 transition duration-400 outline-none'
                                placeholder = "Confirm password..."
                                value = {password.passwordc}
                                name = "passwordc"
                                onChange={handleInputChange}
                            />
                            <p className = "text-lg text-green-600">{error.passwordc}</p>
                            <button
                                className = "border border-green-800 m-4 h-8 text-lg bg-green-600 text-white rounded-lg hover:bg-green-500 transition duration-400"
                                onClick = {handleSubmit}
                            >
                                Update password
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPassword;