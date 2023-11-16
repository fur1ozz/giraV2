import React, { Fragment, useState, useEffect } from 'react';
import Sidebar from "./Sidebar";
import Header from "./Header";
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
function CertainProjectCalendar({ match }){


    const generateStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
            stars.push(<span key={i}>&#9733;</span>);
            } else {
            stars.push(<span key={i}>&#9734;</span>);
            }
        }
        return stars;
    };

    const genStar = (priority, taskId) => {
        return [...Array(5)].map((_, index) => {
            const currentRating = index + 1;
            const radioId = `editPrio${taskId}-${currentRating}`;
    
            return (
                <div className='' key={index}>
                    <label>
                        <input
                            type="radio"
                            className='hidden'
                            name={`rating-${taskId}`}
                            id={radioId}
                            value={currentRating}
                            checked={currentRating === priority || rating}
                            onChange={() => setRating(currentRating)}
                            onClick={() => handlePriorityChange(currentRating)}
                        />
                        <FaStar 
                            className='cursor-pointer' 
                            size={25}
                            style={{
                                color: currentRating <= (hoverStar || priority) ? "#ffc107" : "#e4e5e9"
                            }}
                            onMouseEnter={() => setHoverStar(currentRating)}
                            onMouseLeave={() => setHoverStar(rating)}
                        />
                    </label>
                </div>
            );
        });
    };


    const [inputValue, setInputValue] = useState('');
    const [rating, setRating] = useState(null);
    const [hoverStar, setHoverStar] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const [laravelData, setLaravelData] = useState([]);

    const { projectId, projectTitle } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost/api/CertainProjectCalendar-${projectId}`);
                setLaravelData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching project data:', error);
            }
        };

        fetchData();
    }, [projectId]);


    const [projectOverview, setProjectOverview] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost/api/fetch-projects');
                const matchingProject = response.data.find(project => project.id === parseInt(projectId));
                if (matchingProject) {
                    setProjectOverview(matchingProject.projectTitle);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const [filteredTasks, setFilteredTasks] = useState(laravelData);

    const handleInputChange = (e) => {
        const query = e.target.value.toLowerCase();
        setInputValue(query);
      
        const filtered = laravelData.filter(
          (task) =>
            task.description.toLowerCase().includes(query) ||
            getStatusText(task.status).toLowerCase().includes(query)
        );
      
        setFilteredTasks(sortTasksByDueDate(filtered));
      };

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'short' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    };

    const getStatusColor = (status) => {
        switch (parseInt(status, 10)) {
            case 3:
                return 'bg-green-500';
            case 2:
                return 'bg-yellow-500';
            case 1:
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    const getStatusText = (status) => {
        switch (parseInt(status, 10)) {
            case 0:
                return 'Not started';
            case 1:
                return 'Stuck';
            case 2:
                return 'In progress';
            case 3:
                return 'Done';
            default:
                return 'Unknown';
        }
    };  

    const toggleEdit = (id) => {
        setErrors({});
        setSuccessMessage('');
        const overlay = document.getElementById('overlay');
        const editTask = document.getElementById(`editTask${id}`);
        overlay.classList.toggle('hidden');
        editTask.classList.toggle('hidden');

        const currentTask = laravelData.find(task => task.id === id);
    
        setEditDesc(currentTask.description || '');
        setEditDue(currentTask.dueDate || '');
        setEditStatus(currentTask.status || '');
        setRating(currentTask.priority || null);
    };

    const [editDesc, setEditDesc] = useState('');
    const [editDueDate, setEditDue] = useState('');
    const [editStatus, setEditStatus] = useState(0);
    const [errors, setErrors] = useState({});

    const handleDescChange = (e) => {
        setEditDesc(e.target.value);
    };
    
    const handleStatusChange = (e) => {
        console.log('Status value:', e.target.value);
        setEditStatus(e.target.value);
    };
    const handleDueChange = (e) => {
        setEditDue(e.target.value);
    };
    const handlePriorityChange = (newPriority) => {
        setRating(newPriority);
    };

    const handleSubmitEdit = async (e, taskId) => {
        e.preventDefault();
    
        const newErrors = {};
        const trimmedDesc = editDesc.trim();

        if (!trimmedDesc) {
          newErrors.desc = 'Description is required.';
        } else if (trimmedDesc.length > 100) {
          newErrors.desc = 'Description must be 100 characters or less.';
        }
    
        if (!editDueDate) {
          newErrors.date = 'Date is required.';
        } else {
          const inputDate = new Date(editDueDate);
          const todayDate = new Date();
          todayDate.setHours(0, 0, 0, 0);
          if (inputDate < todayDate.getTime()) {
            newErrors.date = 'Date is in the past.';
          }
        }

        if (Object.keys(newErrors).length === 0) {
            setErrors({});
            try {
                const response = await axios.put(`http://localhost/api/tasks/${taskId}`, {
                    description: trimmedDesc,
                    dueDate: editDueDate,
                    status: editStatus,
                    priority: rating,
                });
    
                if (response) {
                    const updatedData = laravelData.map(task => {
                        if (task.id === taskId) {
                            return {
                                ...task,
                                description: trimmedDesc,
                                dueDate: editDueDate,
                                status: editStatus,
                                priority: rating,
                            };
                        }
                        return task;
                    });
    
                    setLaravelData(updatedData);
                    setFilteredTasks(sortTasksByDueDate(updatedData));
                    setSuccessMessage("Task updated successfully");
                }
            } catch (error) {
                console.error('Error updating task:', error.response.data);
                setSuccessMessage("");
            }
        } else {
            setErrors(newErrors);
            setSuccessMessage("");
        }
    };

    useEffect(() => {
        setFilteredTasks(sortTasksByDueDate(laravelData));
    }, [laravelData]);

    const uniqueMonths = [...new Set(laravelData.map(task => {
        const taskDate = new Date(task.dueDate);
        return `${taskDate.getFullYear()}-${taskDate.getMonth() + 1}`;
    }))];
    const sortMonths = (months, currentDate) => {
        return months.sort((a, b) => {
            const [yearA, monthA] = a.split('-');
            const [yearB, monthB] = b.split('-');
            const dateA = new Date(yearA, monthA - 1);
            const dateB = new Date(yearB, monthB - 1);
            return dateA - dateB;
        });
    };
    
    const currentDate = new Date(new Date().getFullYear()+"-"+new Date().getMonth()+"-"+new Date().getDay());

    const getMonthName = (monthString) => {
        const [year, month] = monthString.split('-');
        const options = { month: 'long', year: 'numeric' };
        const date = new Date();
        date.setFullYear(year, month - 1);
        return date.toLocaleDateString('en-US', options);
    };
    const sortedMonths = sortMonths(uniqueMonths, currentDate);
    const [sortOrder, setSortOrder] = useState('asc');

    const sortTasksByDueDate = (tasks) => {
    return tasks.sort((a, b) => {
        const dateA = new Date(a.dueDate).getTime();
        const dateB = new Date(b.dueDate).getTime();
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
    };
    const getHeaderBorderColor = (index) => {
        const colors = ['border-sky-500', 'border-blue-600', 'border-purple-500'];
        return colors[index % colors.length];
    };
console.log(laravelData);
    
    return(
        <>
        <Header/>
       <div className="min-h-full w-full flex flex-col">
        <Sidebar/>

            <div className='w-100 min-h-[100vh] max-ws:ms-[250px] dark:bg-[#1d2125] dark:text-white flex flex-col items-center overflow-auto'>
                <div className="border-b dark:border-neutral-500 w-[85%] my-12 justify-between flex">
                    <div className='flex flex-col sm:flex-row justify-between mx-6 w-full'>
                        <h1 className="text-3xl mb-2 max-sm:w-[100%] max-sm:text-center">{projectOverview} overview</h1>
                        <div className="flex items-center justify-center">
                            <div className="relative -top-2">
                                <input 
                                    type="text" 
                                    id="serachTask" 
                                    name="searchTask" 
                                    className="indent-1 rounded-lg border py-1.5 focus:outline-none dark:bg-[#1d2125] dark:text-white focus:border-purple-600 focus:border-b-2 transition-colors peer" 
                                    autoComplete="off"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                />
                                <label
                                    htmlFor="searchTask"
                                    className={`absolute left-0 dark:text-gray-500 cursor-text transition-all 
                                    ${ inputValue ? '-top-5 peer-focus:text-purple-600' : 'left-1 top-2 text-s'}`} 
                                >
                                    Search
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                {sortedMonths.map((month, indexM) => (
                <Fragment key={indexM}>
                <div className={`flex w-[83%] border-b-2 ${getHeaderBorderColor(indexM)} ${indexM > 0 ? 'mt-16' : ''}`}><h1 className="text-3xl">{getMonthName(month)}</h1></div>
                <div className="flex flex-col w-4/5">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                            <thead className={`border-b font-medium ${getHeaderBorderColor(indexM)}`}>
                                <tr>
                                    <th scope="col" className="px-6 py-4">Task</th>
                                    <th scope="col" className="px-6 py-4">Owner</th>
                                    <th scope="col" className="px-6 py-4 text-center">Status</th>
                                    <th scope="col" className="px-6 py-4">Due</th>
                                    <th scope="col" className="px-6 py-4">Priority</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {laravelData
                                .filter(task => new Date(task.dueDate).getMonth() + 1 === month) */}
                                {sortTasksByDueDate(filteredTasks)
                                .filter(task => {
                                    const taskDueDate = new Date(task.dueDate);
                                    return (
                                        taskDueDate.getFullYear() === parseInt(month.split('-')[0], 10) &&
                                        taskDueDate.getMonth() === parseInt(month.split('-')[1], 10) - 1
                                    );
                                })
                                .map((task, index) => (
                                    <React.Fragment key={index}>
                                    <div className='w-2/5 min-w-[310px] min-h-1/2 border-2 shadow-lg dark:shadow-white shadow-white dark:bg-[#1d2125] rounded-lg border-neutral-600 flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-neutral-100 hidden' id={`editTask${task.id}`}>
                                        <form className='flex w-full h-full flex-col text-black dark:text-white' onSubmit={(e) => handleSubmitEdit(e, task.id)} id={`formID${task.id}`}>
                                            <div className='absolute bg-neutral-600 top-0 right-0 w-8 h-8 my-4 mx-4 rounded-full cursor-pointer text-center dark:text-black' onClick={(event) => toggleEdit(task.id, event)}>
                                                <p className='flex items-center justify-center h-full text-white'>X</p>
                                            </div>
                                            <div className='flex flex-col my-4 mx-4'>   
                                                <h1 className='text-3xl'>Edit your task</h1>
                                                <p className='text-2xl font-light'>Input your edits here:</p>
                                            </div>
                                            <div className='flex flex-col align-center h-full'>
                                                <div className='flex flex-col mx-4 my-4'>
                                                    <label className='text-xl mb-4'>
                                                        Task
                                                    </label>
                                                    <input 
                                                        className={`indent-2 text-lg rounded-sm border-b-2 ${getHeaderBorderColor(indexM)} dark:bg-[#1d2125]`}
                                                        value={editDesc}
                                                        onChange={handleDescChange}
                                                        id={`editDesc${task.id}`}
                                                    />
                                                    {errors.desc && <p className="text-red-500">{errors.desc}</p>}
                                                </div>
                                                <div className='flex flex-col mx-4 my-4'>
                                                    <label className='text-xl mb-4'>
                                                        Status
                                                    </label>
                                                    <select 
                                                        className={`indent-1 text-lg rounded-sm border-b-2 ${getHeaderBorderColor(indexM)} dark:bg-[#1d2125]`}
                                                        value={editStatus}
                                                        onChange={handleStatusChange}
                                                        id={`editStatus${task.id}`}
                                                    >
                                                        <option value="0">Not started</option>
                                                        <option value="1">Stuck</option>
                                                        <option value="2">In progress</option>
                                                        <option value="3">Done</option>
                                                    </select>
                                                </div>
                                                <div className='flex flex-col mx-4 my-4'>
                                                <label className='text-xl mb-4'>
                                                        Due date
                                                    </label>
                                                    <input 
                                                        type="date" 
                                                        className={`indent-1 text-lg rounded-sm border-b-2 ${getHeaderBorderColor(indexM)} dark:bg-[#1d2125]`}
                                                        value={editDueDate}
                                                        onChange={handleDueChange}
                                                        id={`editDueDate${task.id}`}
                                                        onKeyDown={(e) => e.preventDefault()}
                                                    />
                                                    {errors.date && <p className="text-red-500">{errors.date}</p>}
                                                </div>
                                                <div className='flex flex-col mx-4 my-4'>
                                                    <label className='text-xl mb-4'>
                                                        Priority
                                                    </label>
                                                    <div className='bg-white flex justify-evenly rounded-sm dark:border-neutral-200 dark:bg-[#1d2125] w-full text-xl text-yellow-500'>
                                                        {genStar(task.priority, task.id)}
                                                    </div>
                                                </div>
                                                <div className='flex flex-col mx-4 my-4'>
                                                    <input type="submit" className={`bg-white indent-1 text-lg rounded-sm border ${getHeaderBorderColor(indexM)} dark:bg-[#1d2125]`}/>
                                                    {successMessage && <p className="text-green-500">{successMessage}</p>}
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <tr 
                                        key={index} 
                                        className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-150 dark:hover:bg-neutral-700"
                                        onClick={(e) => toggleEdit(task.id, e)}
                                    >
                                        <td className="whitespace-normal px-6 py-4 font-medium w-[36%] min-w-[36%]">{task.description}</td>
                                        <td className="whitespace-nowrap px-6 py-4 w-[17%] min-w-[17%]">
                                            <img className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full" src={task.owner} alt="Owner"></img>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 w-[25%] min-w-[25%]">
                                            <div className={`text-center px-6 rounded-lg py-2 text-white    ${getStatusColor(task.status)}`}>
                                                {getStatusText(task.status)}
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 w-[10%] min-w-[10%]">{formatDate(task.dueDate)}</td>
                                        <td className="text-yellow-500 whitespace-nowrap px-6 py-4 w-[12%] min-w[12%]">{generateStars(task.priority)}</td>
                                    </tr>
                                    </React.Fragment>
                                ))}
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
        </Fragment>
      ))}
      </div>
            <div className="fixed inset-0 bg-gray-900 bg-opacity-60 z-30 hidden" id='overlay'></div>
    </div>
    </>
    );
}
export default CertainProjectCalendar;