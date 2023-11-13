import Sidebar from "./Sidebar";
import { useState } from 'react';
import Header from "./Header";

function TasksForProject() {
    // Define the tasks and their statuses using useState
    const [tasks, setTasks] = useState([
        {
            taskID: 1,
            title: "Task 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            dueDate: "2023-11-15",
            username: "REI",
            status: "To Do",
            role: "programmer",
        },
        {
            taskID: 2,
            title: "Task 2",
            description: "Another task description.",
            dueDate: "2023-11-20",
            username: "Joh",
            status: "To Do",
            role: "programmer",
        },
        {
            taskID: 3,
            title: "Task 3",
            description: "A task in progress.",
            dueDate: "2023-11-25",
            username: "Sam",
            status: "In Progress",
            role: "scrum master",
        },
        {
            taskID: 4,
            title: "Task 4",
            description: "A completed task.",
            dueDate: "2023-11-10",
            username: "Ben",
            status: "Done",
            role: "programmer",
        },
    ]);

    // Function to handle task status changes
    const changeTaskStatus = (taskID, newStatus) => {
        const updatedTasks = tasks.map((task) => {
            if (task.taskID === taskID) {
                return { ...task, status: newStatus };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    // Separate tasks based on their status
    const todoTasks = tasks.filter((task) => task.status === "To Do");
    const inProgressTasks = tasks.filter((task) => task.status === "In Progress");
    const doneTasks = tasks.filter((task) => task.status === "Done");

    return (
        <>
            <Header />
            <div className="flex w-[100vw]">
                <Sidebar />
                <div className="flex w-full ms-[250px] p-[20px] flex-col max-sm:ms-[80px] overflow-auto">
                    <div className="p-5">
                        <h1 className="font-bold text-2xl text-neutral-700">Project 2</h1>
                    </div>
                    <div className="p-5">
                        <div className="flex bg-neutral-100 drop-shadow-sm rounded-sm h-fit w-fit p-2">
                            <input type="text"
                                   className="w-[100px] border-gray-400 h-30px border-none outline-none bg-transparent me-2 text-neutral-500"
                            />
                            <img src="/images/search.svg" alt="Image" className="w-6 h-30x mr-2"/>
                        </div>
                    </div>

                    <div className="w-full p-5 flex justify-between flex-wrap">
                        {/* TO DO */}
                        <div className="w-72 bg-neutral-100 rounded-sm max-h-full p-2 flex flex-col drop-shadow-sm mb-2">
                            <div className="text-red-500 font-medium pt-1 pb-2">TO DO {todoTasks.length}</div>
                            {todoTasks.map((task, index) => (
                                <div
                                    key={task.taskID}
                                    className="tasks-cont bg-white p-4 rounded-sm min-h-[125px] mb-2 drop-shadow-sm"
                                >
                                    <div className="text-neutral-600">{task.description}</div>
                                    <div className="flex">
                                        <div className="min-h-[20px] text-[11px] flex px-[5px] items-center bg-amber-500 rounded-sm uppercase font-semibold my-1">{task.role}</div>
                                    </div>
                                    <div className="flex justify-between h-8 mt-2">
                                        <div className="flex w-1/2">
                                            <button
                                                className="font-semibold rounded-sm text-neutral-500 hover:text-black"
                                                onClick={() => changeTaskStatus(task.taskID, "In Progress")}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="flex w-1/2 justify-end">
                                            <div className="flex items-center me-2 uppercase font-bold text-neutral-400">
                                                {task.username}
                                            </div>
                                            <div className="flex rounded-full overflow-hidden">
                                                <img src="/images/profilePicBlank.jpeg" alt="Profile Pic" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* In Progress */}
                        <div className="w-72 bg-neutral-100 rounded-sm max-h-full p-2 flex flex-col drop-shadow-sm mb-2">
                            <div className="text-orange-500 font-medium pt-1 pb-2">IN PROGRESS {inProgressTasks.length}</div>
                            {inProgressTasks.map((task, index) => (
                                <div
                                    key={task.taskID}
                                    className="tasks-cont bg-white p-4 rounded-sm min-h-[125px] mb-2 drop-shadow-sm"
                                >
                                    <div className="text-neutral-600">{task.description}</div>
                                    <div className="flex">
                                        <div className="min-h-[20px] text-[11px] flex px-[5px] items-center bg-amber-500 rounded-sm uppercase font-semibold my-1">{task.role}</div>
                                    </div>
                                    <div className="flex justify-between h-8 mt-2">
                                        <div className="flex w-1/2">
                                            <button
                                                className="font-semibold hover:text-black rounded-sm text-neutral-500"
                                                onClick={() => changeTaskStatus(task.taskID, "To Do")}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </button>
                                            <button
                                                className="font-semibold hover:text-black rounded-sm text-neutral-500"
                                                onClick={() => changeTaskStatus(task.taskID, "Done")}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="flex w-1/2 justify-end">
                                            <div className="flex items-center me-2 uppercase font-bold text-neutral-400">
                                                {task.username}
                                            </div>
                                            <div className="flex rounded-full overflow-hidden">
                                                <img src="/images/profilePicBlank.jpeg" alt="Profile Pic" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Done Section */}
                        <div className="w-72 bg-neutral-100 rounded-sm max-h-full p-2 flex flex-col drop-shadow-sm mb-2">
                            <div className="text-lime-500 font-medium pt-1 pb-2">DONE {doneTasks.length}</div>
                            {doneTasks.map((task, index) => (
                                <div
                                    key={task.taskID}
                                    className="tasks-cont bg-white p-4 rounded-sm min-h-[125px] mb-2 drop-shadow-sm"
                                >
                                    <div className="text-neutral-600">{task.description}</div>
                                    <div className="flex">
                                        <div className="min-h-[20px] text-[11px] flex px-[5px] items-center bg-amber-500 rounded-sm uppercase font-semibold my-1">{task.role}</div>
                                    </div>
                                    <div className="flex justify-between h-8 mt-2">
                                        <div className="flex w-1/2">
                                            <button
                                                className="font-semibold hover:text-black rounded-sm text-neutral-500"
                                                onClick={() => changeTaskStatus(task.taskID, "In Progress")}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="flex w-1/2 justify-end">
                                            <div className="flex items-center me-2 uppercase font-bold text-neutral-400">
                                                {task.username}
                                            </div>
                                            <div className="flex rounded-full overflow-hidden">
                                                <img src="/images/profilePicBlank.jpeg" alt="Profile Pic" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TasksForProject;
