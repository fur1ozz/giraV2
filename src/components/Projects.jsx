import Header from "./Header";
import Sidebar from "./Sidebar";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {getMonthTextColor} from "../utils/ColorUtils";


function Projects() {
    const [searchTerm, setSearchTerm] = useState('');
    const [projectsData, setProjectsData] = useState([]);
    const teamId = 1;

    useEffect(() => {
        fetch(`http://localhost/api/projects/${teamId}`)
            .then((response) => response.json())
            .then((data) => setProjectsData(data.projects)) // Extracting projects from the response
            .catch((error) => console.error('Error fetching data:', error));
    }, [teamId]);

    const filteredProjects = Array.isArray(projectsData)
        ? projectsData.filter((project) =>
            project.projectName.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : [];

    const renderProjects = (projectList) => {
        return projectList.map((project, index) => (
            <Link to={`/project/task?id=${project.id}`} key={index}>
                <div className="w-72 bg-neutral-100 rounded-sm min-h-[100px] p-4 flex flex-col drop-shadow-sm mb-5 dark:bg-[#161a1d]">
                    <div className={`w-full ${getMonthTextColor(project.creationDate)} text-[18px] font-semibold justify-center flex text-center`}>
                        {project.projectName}
                    </div>
                    <div className="text-neutral-600 dark:text-[#b6c2ce] break-words">{project.description}</div>
                    <div className="w-full flex justify-center my-[5px]">
                        <div className="h-[2px] bg-[#e5e7eb] w-full dark:bg-[#282f35]"></div>
                    </div>
                    <div className="text-neutral-600 dark:text-[#b6c2ce] flex justify-between"><span className="font-semibold">Date of creation: </span>{project.creationDate}</div>
                    <div className="text-neutral-600 dark:text-[#b6c2ce] flex justify-between"><span className="font-semibold">Creator: </span>{project.creator}</div>
                </div>
            </Link>
        ));
    };

    return (
        <>
            <Header />
            <div className="flex w-[100vw] dark:bg-[#1d2125]">
                <Sidebar />
                <div className="flex w-full ms-[250px] p-[20px] flex-col max-sm:ms-[80px] overflow-auto">
                    <div className="p-5">
                        <h1 className="font-bold text-2xl text-neutral-700 dark:text-[#b6c2cf]">Your Projects</h1>
                    </div>
                    <div className="p-5">
                        <div className="flex border-2 bg-neutral-100 drop-shadow-sm rounded-sm h-fit w-fit p-2 dark:bg-[#22272b] dark:border-[#374049] dark:text-[#9fadbc]">
                            <input
                                type="text"
                                className="w-[100px] border-gray-400 h-30px border-none outline-none bg-transparent me-2 text-neutral-500 dark:text-[#9fadbc]"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </div>
                    </div>
                    <div className="w-full p-5 flex justify-between flex-wrap">
                        {filteredProjects.length > 0 ? (
                            renderProjects(filteredProjects)
                        ) : (
                            <div className="text-neutral-600 dark:text-[#b6c2ce] p-5">
                                No projects found for the search term "{searchTerm}"
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Projects;