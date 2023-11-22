import React, { useRef, useState, useEffect } from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";

const Profile = () => {
    const [laravelData, setLaravelData] = useState({
        name: '',
        email: '',
        created_at: null,
     });
    const token = localStorage.getItem('token');
    const [imageUrl, setImageUrl] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost/api/fetch-user', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                console.log(data);
                setLaravelData(data);
                setImageUrl(data.profile_image);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, [token]);

    const fileInputRef = useRef(null);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = async (e) => {
        const selectedFile = e.target.files[0];
    
        const formData = new FormData();
        formData.append('image', selectedFile);
    
        try {
            const response = await fetch('http://localhost/api/update-image', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const responseData = await response.json();
            console.log(responseData);
            setImageUrl(responseData.response);
        } catch (error) {
            console.error('Error uploading image:', error.message);
        }
    };
    

    const formatDate = (dateString) => {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    };
    const defaultImageUrl = 'https://img.freepik.com/premium-vector/avatar-profile-icon-vector-illustration_276184-165.jpg';
    
    return (
        <>
            <Header />
            <div className="min-h-full w-full flex flex-col">
                <Sidebar />
                <div className='w-100 min-h-[100vh] ms-[250px] max-sm:ms-[80px] max-[500px]:ms-0 dark:bg-[#1d2125] dark:text-white flex flex-col items-center overflow-auto'>
                    <div className="flex flex-col justify-center items-center mt-10 dark:border-purple-800 border-cyan-500 border-2 p-5 bg-gray-900 rounded-lg bg-neutral-100 dark:bg-[#1d2125]">
                        <div
                            className="overflow-hidden rounded-full mb-4 justify-center hover:brightness-[80%] transition duration-300 ease-in-out cursor-pointer relative "
                            onClick={handleImageClick}
                        >
                            <input
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                ref={fileInputRef}
                                onChange={handleFileChange}
                            />
                            <img
                                src={imageUrl ? imageUrl : defaultImageUrl}
                                alt="Profile"
                                className="w-80 h-80 object-cover"
                            />
                            <label
                                htmlFor="fileInput"
                                className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center w-full h-full cursor-pointer"
                            >
                            </label>
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-2">{laravelData.name}</h2>
                            <p className="mb-2">Email: {laravelData.email}</p>
                            <p>Joined: {formatDate(laravelData.created_at)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
