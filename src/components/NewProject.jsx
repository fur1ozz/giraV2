import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import Header from "./Header";
import { getMonthTextColor } from "../utils/ColorUtils";

function NewProject() {
    const [teamId, setTeamId] = useState('');
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [teamIdError, setTeamIdError] = useState('');
    const [nameError, setNameError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState('');


    const creator = "Janis Berzins";

    const handleCreateProject = () => {
        // Reset previous errors
        setTeamIdError('');
        setNameError('');
        setDescriptionError('');

        let isValid = true;

        // Simple validation for length
        if (projectName.length > 100) {
            setNameError('Project name must be 100 characters or less.');
            isValid = false;
        } else if (projectName.length < 5) {
            setNameError('Project name must be at least 5 characters.');
            isValid = false;
        }

        if (projectDescription.length > 250) {
            setDescriptionError('Project description must be 250 characters or less.');
            isValid = false;
        } else if (projectDescription.length < 5) {
            setDescriptionError('Project description must be at least 5 characters.');
            isValid = false;
        }

        if (!teamId || isNaN(teamId)) {
            setTeamIdError('Team ID is required and must be a number.');
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        const requestData = {
            projectName: projectName,
            description: projectDescription,
            creator: creator,
            team_id: parseInt(teamId),
        };

        fetch('http://localhost/api/projects/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log('Project created successfully:', data);
                setConfirmationMessage('Project created successfully!');
                setTeamId('');
                setProjectName('');
                setProjectDescription('');
                setTimeout(() => {
                    setConfirmationMessage('');
                }, 3000);
            })
            .catch((error) => {
                console.error('Error creating project:', error);
            });
    };

    return (
        <>
            <Header />
            <div className="flex w-[100vw] dark:bg-[#1d2125]">
                <Sidebar />
                <div className="flex w-full mx-auto p-[20px] flex-col max-md:ms-[250px] max-sm:mx-[80px] overflow-auto max-[500px]:mx-0">
                    <div className="p-5 flex justify-center">
                        <h1 className="font-bold text-2xl text-neutral-700 dark:text-[#b6c2cf]">New Project</h1>
                    </div>
                    <div className="p-5 flex justify-center">
                        <div className="w-full max-w-xs">
                            <form className="px-8 pt-6 pb-8 mb-4">
                                <div className="mb-4">
                                    <label className="block text-neutral-700 dark:text-[#b6c2cf] text-sm font-bold mb-2" htmlFor="teamId">
                                        Team id
                                    </label>
                                    <input
                                        className={`dark:bg-[#282f35] dark:border-0 border shadow appearance-none rounded w-full py-2 px-3 text-gray-700 dark:text-[#b6c2cf] dark:placeholder:text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                            teamIdError ? 'border-red-500 dark:border' : ''
                                        }`}
                                        id="teamId"
                                        type="number"
                                        placeholder="id"
                                        value={teamId}
                                        onChange={(e) => {
                                            setTeamId(e.target.value);
                                            if (!e.target.value || isNaN(e.target.value)) {
                                                setTeamIdError('Team ID is required and must be a number.');
                                            } else {
                                                setTeamIdError('');
                                            }
                                        }}
                                        required
                                    />
                                    {teamIdError && <p className="text-red-500 text-xs italic">{teamIdError}</p>}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-neutral-700 dark:text-[#b6c2cf] text-sm font-bold mb-2" htmlFor="projectName">
                                        Project name
                                    </label>
                                    <input
                                        className={`dark:bg-[#282f35] dark:border-0 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-[#b6c2cf] dark:placeholder:text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                            nameError ? 'border-red-500 dark:border' : ''
                                        }`}
                                        id="projectName"
                                        type="text"
                                        placeholder="MC Hamersmith"
                                        value={projectName}
                                        onChange={(e) => {
                                            setProjectName(e.target.value);
                                            if (e.target.value.length > 100) {
                                                setNameError('Project name must be 100 characters or less.');
                                            } else if (e.target.value.length < 5) {
                                                setNameError('Project name must be at least 5 characters.');
                                            } else {
                                                setNameError('');
                                            }
                                        }}
                                        required
                                    />
                                    {nameError && <p className="text-red-500 text-xs italic">{nameError}</p>}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-neutral-700 dark:text-[#b6c2cf] text-sm font-bold mb-2" htmlFor="projectDescription">
                                        Project description
                                    </label>
                                    <textarea
                                        className={`dark:bg-[#282f35] dark:border-0 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-[#b6c2cf] dark:placeholder:text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none ${
                                            descriptionError ? 'dark:border border-red-500' : ''
                                        }`}
                                        id="projectDescription"
                                        placeholder="Freestyle gangster rappers"
                                        rows="4"
                                        value={projectDescription}
                                        onChange={(e) => {
                                            setProjectDescription(e.target.value);
                                            if (e.target.value.length > 250) {
                                                setDescriptionError('Project description must be 250 characters or less.');
                                            } else if (e.target.value.length < 5) {
                                                setDescriptionError('Project description must be at least 5 characters.');
                                            } else {
                                                setDescriptionError('');
                                            }
                                        }}
                                        required
                                    />
                                    {descriptionError && <p className="text-red-500 text-xs italic">{descriptionError}</p>}
                                </div>
                                <div className="flex items-center justify-center">
                                    <button
                                        className="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-md
                                        text-neutral-800 dark:text-neutral-200 bg-cyan-500 hover:bg-cyan-400 dark:bg-violet-500 dark:hover:bg-violet-700"
                                        type="button"
                                        onClick={handleCreateProject}
                                    >
                                        Create
                                    </button>
                                </div>
                                {confirmationMessage && (
                                    <p className="text-green-500 text-sm mt-2 italic">{confirmationMessage}</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewProject;
