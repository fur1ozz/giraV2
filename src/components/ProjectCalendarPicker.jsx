import React, { Fragment, useState, useEffect } from 'react';
import Sidebar from "./Sidebar";
import Header from "./Header";

function ProjectCalendarPicker() {
    const [laravelData, setLaravelData] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost/api/fetch-projects', {
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
                setLaravelData(data.data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, [token]);

    const handleProjectClick = (projectId, projectTitle) => {
        window.location.href = `http://localhost:3000/CertainProjectCalendar/${projectId}`;
    };

    return (
        <>
            <Header />
            <div className="min-h-full w-full flex flex-col">
                <Sidebar />
                <div className='w-100 min-h-screen ms-[250px] max-sm:ms-[80px] max-[500px]:ms-0 dark:bg-[#1d2125] dark:text-white flex flex-col items-center overflow-auto'>
                    <div className="border-b border-[#e5e7eb] dark:border-[#282f35] w-[85%] my-12 flex">
                        <div className='flex flex-col mx-6 w-full justify-center text-center'>
                            <h1 className="text-6xl mb-2 font-bold text-neutral-700 dark:text-[#b6c2cf]">Project calendar</h1>
                            <p className="text-3xl mb-2 font-normal text-neutral-700 dark:text-[#b6c2cf]">Find your desired project</p>
                        </div>
                    </div>
                    <div className='flex flex-wrap flex-grow w-full h-full justify-center '>
                        {laravelData.map((project) => (
                            <div key={project.id} className='border-2 dark:border-neutral-600 border-neutral-400 dark:text-white flex justify-center text-center items-center w-[300px] h-[200px] m-4 cursor-pointer hover:dark:bg-neutral-700 hover:dark:border-neutral-200 hover:bg-neutral-200 hover:border-neutral-600 transition duration-300 ease-in-out' id={`projectBox${project.id}`} onClick={() => handleProjectClick(project.id, project.projectTitle)}>
                                <h1 className='text-3xl font-medium'>{project.projectName}</h1>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="fixed inset-0 bg-gray-900 bg-opacity-60 z-30 hidden" id='overlay'></div>
            </div>
        </>
    );
}

export default ProjectCalendarPicker;
