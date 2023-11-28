import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import Header from "./Header";

function NewProject() {
    const [teamName, setTeamName] = useState('');
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [teamNameError, setTeamNameError] = useState('');
    const [nameError, setNameError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const creator = "Janis Berzins";

    const handleCreateProject = async () => {
        setTeamNameError('');
        setNameError('');
        setDescriptionError('');

        let isValid = true;

        if (!teamName) {
            setTeamNameError('Team Name is required.');
            isValid = false;
        } else if (teamName.length > 100) {
            setTeamNameError('Team Name must be 100 characters or less.');
            isValid = false;
        } else if (teamName.length < 5) {
            setTeamNameError('Team Name must be at least 5 characters.');
            isValid = false;
        }

        if (!projectName) {
            setNameError('Project name is required.');
            isValid = false;
        } else if (projectName.length > 100) {
            setNameError('Project name must be 100 characters or less.');
            isValid = false;
        } else if (projectName.length < 5) {
            setNameError('Project name must be at least 5 characters.');
            isValid = false;
        }

        if (!projectDescription) {
            setDescriptionError('Project description is required.');
            isValid = false;
        } else if (projectDescription.length > 250) {
            setDescriptionError('Project description must be 250 characters or less.');
            isValid = false;
        } else if (projectDescription.length < 5) {
            setDescriptionError('Project description must be at least 5 characters.');
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        try {
            console.log("test1");
            const requestDataName = {
                teamName: teamName,
            };

            const teamResponse = await fetch('http://localhost/api/teams/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestDataName),
            });

            if (!teamResponse.ok) {
                throw new Error(`HTTP error! Status: ${teamResponse.status}`);
            }

            const teamData = await teamResponse.json();
            const teamId = teamData.team_id;

            const requestData = {
                projectName: projectName,
                description: projectDescription,
                creator: creator,
                team_id: teamId,
            };

            // Second fetch to create the project
            const projectResponse = await fetch('http://localhost/api/projects/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (!projectResponse.ok) {
                throw new Error(`HTTP error! Status: ${projectResponse.status}`);
            }

            const projectData = await projectResponse.json();
            console.log('Project created successfully:', projectData);
            setConfirmationMessage('Project created successfully!');
            setTeamName('');
            setProjectName('');
            setProjectDescription('');
            setTimeout(() => {
                setConfirmationMessage('');
            }, 3000);
        } catch (error) {
            console.error('Error:', error);
        }
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
                                    <label className="block text-neutral-700 dark:text-[#b6c2cf] text-sm font-bold mb-2" htmlFor="teamName">
                                        Team Name
                                    </label>
                                    <input
                                        className={`dark:bg-[#282f35] dark:border-transparent border shadow appearance-none rounded w-full py-2 px-3 text-gray-700 dark:text-[#b6c2cf] dark:placeholder:text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                            teamNameError ? 'border-red-500 dark:border-red-500' : ''
                                        }`}
                                        id="teamName"
                                        type="text"
                                        placeholder="Team Name"
                                        value={teamName}
                                        onChange={(e) => {
                                            setTeamName(e.target.value);
                                            if (!e.target.value) {
                                                setTeamNameError('Team Name is required.');
                                            } else {
                                                setTeamNameError('');
                                            }
                                        }}
                                        required
                                    />
                                    {teamNameError && <p className="text-red-500 text-xs italic">{teamNameError}</p>}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-neutral-700 dark:text-[#b6c2cf] text-sm font-bold mb-2" htmlFor="projectName">
                                        Project name
                                    </label>
                                    <input
                                        className={`dark:bg-[#282f35] dark:border-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-[#b6c2cf] dark:placeholder:text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                            nameError ? 'border-red-500 dark:border-red-500' : ''
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
                                        className={`dark:bg-[#282f35] dark:border-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-[#b6c2cf] dark:placeholder:text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none ${
                                            descriptionError ? 'dark:border-red-500 border-red-500' : ''
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
