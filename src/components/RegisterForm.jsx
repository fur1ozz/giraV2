import React, {useState, useEffect} from 'react';

const RegisterForm = ({message, stop}) => {
    const [register, setRegister] = useState({
        name: '',
        password: '',
        email: '',
        passwordc: ''
    });

    const [error, setError] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        if (Object.values(touched).some((fieldTouched) => fieldTouched)) {
            validateForm(register);
        }
    }, [register, touched]);

    const validateNotEmpty = (value) => {
        return value.trim() === '' ? 'This field is required' : '';
    };

    const validateForm = (values) => {
        const validationFunctions = {
            name: (value) => validateNotEmpty(value) || validateNoSpecialCharacters(value),
            email: (value) => validateNotEmpty(value) || validateEmailFormat(value),
            password: (value) => validateNotEmpty(value) || validatePassword(value),
            passwordc: (value) => validateNotEmpty(value) || validatePasswordc(value),
        };

        const updatedErrorState = {};
        Object.entries(values).forEach(([name, value]) => {
            updatedErrorState[name] = validationFunctions[name](value);
        });

        setError(updatedErrorState);

        return Object.values(updatedErrorState).every((errorMsg) => errorMsg === '');
    };

    const validateNoSpecialCharacters = (value) => {
        const regex = /^[a-zA-Z0-9_]+$/;
        return regex.test(value) ? '' : 'Username should not contain special characters';
    };

    const validateEmailFormat = (value) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(value) ? '' : 'Invalid email format';
    };

    const validatePassword = (value) => {
        return value.length < 8 ? 'Password too short' : '';
    };

    const validatePasswordc = (value) => {
        return value !== register.password ? 'Passwords do not match' : '';
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));

        setRegister((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleRegister = () => {
        if (validateForm(register)) {
            fetch("http://localhost/api/create-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(register),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    if (data.message == 'Registration successful') {
                        message();
                        const timeoutId = setTimeout(() => {
                            stop();
                        }, 3000);
                    }else{
                        const updatedErrorState = {};
                        data.messages.forEach((error) => {
                            updatedErrorState[error.field] = error.message;
                        });

                        setError(updatedErrorState);
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            console.log('Form has errors. Cannot submit.');
        }
    };


    return (
        <div className = "flex items-center w-full h-full">
            <div className = "flex flex-col text-4xl indent-4 w-full justify-center">
                <h1 className = "text-gray-800 mb-5">Register</h1>
                <input
                    type="text"
                    className='indent-2 rounded-lg border-2 border-purple-400 m-4 h-9 text-gray-400 text-lg dark:text-black bg-white focus:border-purple-700 transition duration-400 outline-none'
                    onChange={handleInputChange}
                    name = "name"
                    value = {register.name}
                    placeholder = "Choose your username"
                />
                <p className = "text-lg text-purple-600">{error.name}</p>
                <input
                    type="text"
                    className='indent-2 rounded-lg border-2 border-purple-400 m-4 h-9 text-gray-400 text-lg dark:text-black bg-white focus:border-purple-700 transition duration-400 outline-none'
                    onChange={handleInputChange}
                    name = "email"
                    value = {register.email}
                    placeholder = "Enter your email"
                />
                <p className = "text-lg text-purple-600">{error.email}</p>
                <input
                    type="password"
                    className='indent-2 rounded-lg border-2 border-purple-400 m-4 h-9 text-gray-400 text-lg dark:text-black bg-white focus:border-purple-700 transition duration-400 outline-none'
                    onChange={handleInputChange}
                    name = "password"
                    value = {register.password}
                    placeholder = "Choose a password"
                />
                <p className = "text-lg text-purple-600">{error.password}</p>
                <input
                    type="password"
                    className='indent-2 rounded-lg border-2 border-purple-400 m-4 h-9 text-gray-400 text-lg dark:text-black bg-white focus:border-purple-700 transition duration-400 outline-none'
                    onChange={handleInputChange}
                    name = "passwordc"
                    value = {register.passwordc}
                    placeholder = "Confirm password"
                />
                <p className = "text-lg text-purple-600">{error.passwordc}</p>
                <button
                    className = "border border-purple-800 m-4 h-8 text-lg bg-purple-600 text-white rounded-lg hover:bg-purple-400 transition duration-400"
                    onClick={handleRegister}
                >
                    Sign up
                </button>
            </div>
        </div>
    );
};

export default RegisterForm;