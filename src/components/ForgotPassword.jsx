import React, {useState} from 'react';
import RegisterBox from "./RegisterBox";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const [error, setError] = useState('');

    const handleEmailChange = (event) => {
        const inputValue = event.target.value
        setEmail(inputValue);

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!inputValue.trim()) {
            setError('Email cannot be empty');
        } else if (!emailPattern.test(inputValue)) {
            setError('Please enter a valid email address');
        } else {
            setError('');
        }
    }

    const handleSubmit = () => {
        if(error === ''){
            fetch("http://localhost/api/forgot-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: email }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
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
                            <h1 className = "text-gray-800 mb-5 md:text-4xl text-2xl">Forgot password</h1>
                            <p className = "text-gray-500 md:text-2xl text-xl ml-5 mr-5">Enter your email so we can send you a link to reset your password</p>
                            <input
                                type="text"
                                className='indent-2 rounded-lg border-2 border-red-400 m-4 h-9 text-gray-400 text-lg bg-white focus:border-red-700 transition duration-400 outline-none'
                                placeholder = "Email..."
                                value = {email}
                                onChange = {handleEmailChange}
                            />
                            <p className = "text-lg text-red-600">{error}</p>
                            <button
                                className = "border border-red-800 m-4 h-8 text-lg bg-red-600 text-white rounded-lg hover:bg-red-500 transition duration-400"
                                onClick = {handleSubmit}
                            >
                                Send email
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;