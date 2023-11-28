import React, {useEffect, useState} from 'react';
import {FaStar} from "react-icons/fa";

const CreateTask = ({ toggle, project }) => {
    const [task, setTask] = useState({
       title: '',
       description: '',
       role: '',
       dueDate: '',
       priority: 0,
       projectID : project,
       status: 0
    });

    const [hoveredRating, setHoveredRating] = useState(0);
    const [error, setError] = useState({});
    const [touched, setTouched] = useState({});



    const validateNotEmpty = (value) => {
        return value === '' ? 'This field is required' : '';
    };

    const validateNoSpecialCharacters = (value) => {
        const regex = /^[a-zA-Z0-9_\s]+$/;
        return regex.test(value) ? '' : 'Field shouldn\'t contain special characters';
    };


    const validateDate = (value) => {
        const parsedDate = new Date(value);
        const result = !isNaN(parsedDate.getTime());

        return result ? '' : 'Invalid date';
    };

    const validateForm = (values) => {
        const validationFunctions = {
            title: (value) => validateNotEmpty(value) || validateNoSpecialCharacters(value),
            role: (value) => validateNotEmpty(value) || validateNoSpecialCharacters(value),
            description: (value) => validateNotEmpty(value) || validateNoSpecialCharacters(value),
            dueDate: (value) => validateNotEmpty(value) || validateDate(value),
            priority: (value) => validateNotEmpty(value) || validateNoSpecialCharacters(value),
        };

        const updatedErrorState = {};
        Object.entries(values).forEach(([name, value]) => {
            const validationFunction = validationFunctions[name];
            if (validationFunction) {
                updatedErrorState[name] = validationFunction(value);
            }
        });

        setError(updatedErrorState);

        return Object.values(updatedErrorState).every((errorMsg) => errorMsg === '');
    };


    useEffect(() => {
        if (Object.values(touched).some((fieldTouched) => fieldTouched)) {
            validateForm(task);
        }
    }, [task, touched]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));

        setTask((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const StarRating = () => {
        const handleStarClick = (index) => {
            setTask((prevTask) => ({ ...prevTask, priority: index + 1 }));
        };

        const handleStarHover = (index) => {
            setHoveredRating(index + 1);
        };

        const handleStarLeave = () => {
            setHoveredRating(0);
        };

        const stars = Array.from({ length: 5 }, (_, index) => (
            <span
                key={index}
                className={`text-2xl cursor-pointer ${
                    index + 1 <= (hoveredRating || task.priority) ? 'text-yellow-500' : 'text-gray-300'
                } ${index + 1 <= task.priority ? 'hover:text-yellow-500' : ''}`}
                onMouseEnter={() => handleStarHover(index)}
                onMouseLeave={handleStarLeave}
                onClick={() => handleStarClick(index)}

            >
        ★
      </span>
        ));
        return stars;
    };

    const handleSubmit = (e) => {
        const token = localStorage.getItem('token');
        console.log(token);

        console.log(task);

        if(validateForm(task)){
            fetch("http://localhost/api/create-task", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(task),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    if(data.message){
                        window.location.reload();
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }else{
            e.preventDefault();
        }
    }

    return (
        <div className='w-2/5 min-w-[310px] min-h-1/2 border-2 shadow-lg dark:shadow-white shadow-white dark:bg-[#1d2125] rounded-lg border-neutral-600 flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-neutral-100'>
            <div className='flex w-full h-full flex-col text-black dark:text-white'>
                <div className='absolute bg-neutral-600 top-0 right-0 w-8 h-8 my-4 mx-4 rounded-full text-center dark:text-black' onClick = {toggle}>
                    <p className='flex items-center justify-center h-full text-white'>X</p>
                </div>
                <div className='flex flex-col my-4 mx-4'>
                    <h1 className='text-3xl'>Create task</h1>
                    <p className='text-2xl font-light'>Set the task here:</p>
                </div>
                <div className='flex flex-col align-center h-full'>
                    <div className='flex flex-col mx-4 my-4'>
                        <label className='text-xl mb-4'>
                            Task
                        </label>
                        <input
                            className={`indent-2 text-lg rounded-sm border-b-2 dark:bg-[#1d2125]`}
                            placeholder = "Task name"
                            value = {task.title}
                            name = "title"
                            onChange = {handleInputChange}
                        />
                        <p className="text-red-500">{error.title}</p>
                    </div>
                    <div className='flex flex-col mx-4 my-4'>
                        <label className='text-xl mb-4'>
                            Description
                        </label>
                        <input
                            className={`indent-2 text-lg rounded-sm border-b-2 dark:bg-[#1d2125]`}
                            placeholder = "Task description"
                            value = {task.description}
                            name = "description"
                            onChange = {handleInputChange}
                        />
                        <p className="text-red-500">{error.description}</p>
                    </div>
                    <div className='flex flex-col mx-4 my-4'>
                        <label className='text-xl mb-4'>
                            Role
                        </label>
                        <input
                            className={`indent-2 text-lg rounded-sm border-b-2 dark:bg-[#1d2125]`}
                            placeholder = "Role"
                            value = {task.role}
                            name = "role"
                            onChange = {handleInputChange}
                        />
                        <p>{error.role}</p>
                    </div>
                    <div className='flex flex-col mx-4 my-4'>
                        <label className='text-xl mb-4'>
                            Due date
                        </label>
                        <input
                            type="date"
                            className={`indent-1 text-lg rounded-sm border-b-2 dark:bg-[#1d2125]`}
                            value = {task.dueDate}
                            onChange = {handleInputChange}
                            name = "dueDate"
                        />
                        <p className="text-red-500">{error.dueDate}</p>
                    </div>
                    <div className='flex flex-col mx-4 my-4'>
                        <label className='text-xl mb-4'>
                            Priority
                        </label>
                        <div className='bg-white flex justify-evenly rounded-sm dark:border-neutral-200 dark:bg-[#1d2125] w-full text-xl text-yellow-500'>
                            {StarRating()}
                        </div>
                        <p className="text-red-500">{error.priority}</p>
                    </div>
                    <div className='flex flex-col mx-4 my-4'>
                        {/*<input type="submit" className={`bg-white indent-1 text-lg rounded-sm border  dark:bg-[#1d2125]`}/>*/}

                        <button
                            className={`bg-white indent-1 text-lg rounded-sm border  dark:bg-[#1d2125]`}
                            onClick={handleSubmit}
                        >
                            Create task
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTask;