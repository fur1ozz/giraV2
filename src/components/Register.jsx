import React, { useState, useEffect } from 'react';
import RegisterBox from "./RegisterBox";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [redirected, setRedirected] = useState(false);
    const navigate = useNavigate();
    const [message, setMessage] = useState(false);

    const setTrue = () => {
        setMessage(true);
    }

    const setFalse = () => {
        setMessage(false);
    }

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');

            if (token && !redirected) {
                try {
                    const response = await fetch('http://localhost/api/token-login', {
                        method: "GET",
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        },
                    });

                    if (response.ok) {
                        const user = await response.json();
                        if(user.message){
                            localStorage.setItem('token', user.token);
                            setRedirected(true);
                            // window.location.href = "http://localhost:3000/Home";
                            navigate('/Home');
                        }
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        };

        fetchData();
    }, []);


    const storedDarkMode = localStorage.getItem("darkMode");
    const [isDarkMode, setIsDarkMode] = useState(
        storedDarkMode !== null ? JSON.parse(storedDarkMode) : null
    );

    useEffect(() => {
        if (isDarkMode !== null) {
            if (isDarkMode === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
        }
    }, [isDarkMode]);

    useEffect(() => {
        if (isDarkMode === null) {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setIsDarkMode("dark");
            } else {
                setIsDarkMode("light");
            }
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
    };

    return (
        <div>
            {message &&
                <div className='fixed top-0 z-40 left-0 w-full h-full flex items-center justify-center bg-white'>
                    <div className="bg-white border border-gray-300 p-4 rounded shadow-md">
                        <p className="text-black">New user registered successfully.</p>
                    </div>
                </div>
            }
            <div className = "min-w-full  min-h-screen flex">
                <div className='absolute top-0 right-0 my-4 mx-4'>
                    <button href="#" className="text-cyan-500 hover:text-cyan-600 dark:text-violet-500 dark:hover:text-violet-800" onClick={toggleDarkMode}>
                        {isDarkMode === "dark" ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                        )}
                    </button>
                </div>
                <div className = "min-w-full min-h-full flex justify-center content-center items-center">
                    <RegisterBox message = {setTrue} stop = {setFalse} />
                </div>
            </div>
        </div>
    );
};

export default Register;