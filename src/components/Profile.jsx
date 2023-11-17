import React from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";

const Profile = () => {
    const user = {
        name: 'John Doe',
        email: 'john@example.com',
        joinedAt: 'November 17, 2023',
    };

    return (
        <>
            <Header/>
            <div className="min-h-full w-full flex flex-col">
                <Sidebar/>
                <div className="w-100 min-h-[100vh] ms-[250px] max-sm:ms-[80px] dark:bg-[#1d2125] dark:text-white flex flex-col items-center overflow-auto ">
                    <div className = "flex flex-col justify-center items-center mt-10 border-purple-800 border-2 p-5 bg-gray-900 rounded-lg">
                        <div className="overflow-hidden rounded-full mb-4 justify-center hover:brightness-75 transition-transform duration-500 cursor-pointer">
                            <img
                                src="https://img.freepik.com/premium-vector/avatar-profile-icon-vector-illustration_276184-165.jpg" // Replace with the actual path or URL of the user's profile image
                                alt="Profile"
                                className="w-72 h-72 object-cover "
                            />
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
                            <p className="mb-2">Email: {user.email}</p>
                            <p>Joined: {user.joinedAt}</p>
                            {/* Add additional user details here */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;