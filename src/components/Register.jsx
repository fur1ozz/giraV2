import React from 'react';
import RegisterBox from "./RegisterBox";

const Register = () => {
    return (
        <div>
            <div className = "min-w-full  min-h-screen flex">
                <div className = "min-w-full min-h-full flex justify-center content-center items-center">
                    <RegisterBox />
                </div>
            </div>
        </div>
    );
};

export default Register;