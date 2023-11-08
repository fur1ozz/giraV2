import Sidebar from "./Sidebar";

function TasksForProject() {
    // Define an array with your task data
    const tasksData = [
        {
            title: "Task 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            dueDate: "2023-11-15",
            username: "REI",
            status: "To Do",
        },
        {
            title: "Task 2",
            description: "Another task description.",
            dueDate: "2023-11-20",
            username: "Joh",
            status: "To Do",
        },
        {
            title: "Task 3",
            description: "A task in progress.",
            dueDate: "2023-11-25",
            username: "Sam",
            status: "In Progress",
        },
        {
            title: "Task 4",
            description: "A completed task.",
            dueDate: "2023-11-10",
            username: "Ben",
            status: "Done",
        },
    ];
    const todoTasks = tasksData.filter((task) => task.status === "To Do");
    const inProgressTasks = tasksData.filter((task) => task.status === "In Progress");
    const doneTasks = tasksData.filter((task) => task.status === "Done");

    return (
        <>
            <div className="flex w-[100vw]">
                <Sidebar />
                <div className="flex w-full ms-[250px] p-[20px] flex-col">
                    <div className="p-5">
                        <h1 className="font-bold text-2xl text-neutral-700">Project 2</h1>
                    </div>
                    <div className="w-full p-5 flex justify-between flex-wrap">
                        {/*TO DO*/}
                        <div className="w-72 bg-neutral-100 rounded-sm max-h-full p-2 flex flex-col drop-shadow-sm">
                            <div className="text-neutral-500 font-medium pt-1 pb-2">TO DO 2</div>
                            {/* Map through the todoTasks array and render each task */}
                            {todoTasks.map((task, index) => (
                                <div
                                    key={index}
                                    className="tasks-cont bg-white p-4 rounded-sm min-h-[125px] mb-2 drop-shadow-sm"
                                >
                                    <div className="text-neutral-600">{task.description}</div>
                                    <div className="flex justify-between h-8 mt-2">
                                        <div className="flex w-1/2">
                                            <button className="font-semibold px-4 hover:bg-[#fcfcfc] rounded-sm text-neutral-500">
                                                &gt;
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
                        <div className="w-72 bg-neutral-100 rounded-sm max-h-full p-2 flex flex-col drop-shadow-sm">
                            <div className="text-neutral-500 font-medium pt-1 pb-2">IN PROGRESS 0</div>
                            {inProgressTasks.map((task, index) => (
                                <div
                                    key={index}
                                    className="tasks-cont bg-white p-4 rounded-sm min-h-[125px] mb-2 drop-shadow-sm"
                                >
                                    <div className="text-neutral-600">{task.description}</div>
                                    <div className="flex justify-between h-8 mt-2">
                                        <div className="flex w-1/2">
                                            <button className="font-semibold px-4 hover:bg-[#fcfcfc] rounded-sm text-neutral-500">
                                                &lt;
                                            </button>
                                            <button className="font-semibold px-4 hover:bg-[#fcfcfc] rounded-sm text-neutral-500">
                                                &gt;
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
                        <div className="w-72 bg-neutral-100 rounded-sm max-h-full p-2 flex flex-col drop-shadow-sm">
                            <div className="text-neutral-500 font-medium pt-1 pb-2">DONE 0</div>
                            {doneTasks.map((task, index) => (
                                <div
                                    key={index}
                                    className="tasks-cont bg-white p-4 rounded-sm min-h-[125px] mb-2 drop-shadow-sm"
                                >
                                    <div className="text-neutral-600">{task.description}</div>
                                    <div className="flex justify-between h-8 mt-2">
                                        <div className="flex w-1/2">
                                            <button className="font-semibold px-4 hover:bg-[#fcfcfc] rounded-sm text-neutral-500">
                                                &lt;
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
