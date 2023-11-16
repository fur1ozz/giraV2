import React from 'react';
import {useState, useEffect} from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const RegisterBox = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);

    const handleToggleForm = () => {
        setIsLogin((prev) => !prev);
    };
    
    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const conditionClass = width < 640 ? 'min-w-full' : '';

    return (
        <div className="xl:w-3/6 h-3/4 border-2 rounded-lg bg-white shadow-lg border-gray-300 lg:w-8/12 md:w-4/6 w-5/6 dark:border-neutral-200 dark:text-white ">
            <div className="container w-full h-full relative rounded-lg dark:invert" style={{
                backgroundImage: `url('/images/box-image.jpg')`,
                backgroundSize: 'cover',
            }}>
                <div className="max-w-full h-full flex overflow-hidden rounded-lg shadow-md">
                    <div
                        className={`sm:w-full transition-transform duration-500 ease-in-out transform flex ${conditionClass} ${
                            isLogin ? 'sm:translate-x-0 translate-x-0' : 'sm:-translate-x-full -translate-x-full '
                        }`}
                    >
                        <div className="w-full bg-gray-100 text-white p-6">
                            <LoginForm/>
                        </div>
                    </div>
                    <div
                        className={`sm:w-full transition-transform duration-500 ease-in-out transform flex ${conditionClass} ${
                            isLogin ? 'sm:translate-x-full translate-x-0' : 'sm:translate-x-0 -translate-x-full'
                        }`}
                    >
                        <div className="w-full bg-gray-100 text-white p-6">
                            <RegisterForm/>
                        </div>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <button
                        className="text-blue-500 dark:text-pink-600 hover:underline focus:outline-none"
                        onClick={handleToggleForm}
                    >
                        {isLogin ? 'Join us!' : 'Already have an account?'}
                    </button>
                </div>
            </div>
        </div>

    );
};

export default RegisterBox;