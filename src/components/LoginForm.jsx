import React, {useEffect, useState} from 'react';

const LoginForm = () => {
    const [login, setLogin] = useState({
        name: '',
        password: ''
    });

    const [error, setError] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        if (Object.values(touched).some((fieldTouched) => fieldTouched)) {
            validateForm(login);
        }
    }, [login, touched]);

    const validateNotEmpty = (value) => {
        return value.trim() === '' ? 'This field is required' : '';
    };

    const validateForm = (values) => {
        const validationFunctions = {
            name: (value) => validateNotEmpty(value),
            password: (value) => validateNotEmpty(value),
        };

        const updatedErrorState = {};
        Object.entries(values).forEach(([name, value]) => {
            updatedErrorState[name] = validationFunctions[name](value);
        });

        setError(updatedErrorState);

        return Object.values(updatedErrorState).every((errorMsg) => errorMsg === '');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));

        setLogin((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleLogin = () => {
        if (validateForm(login)) {
            fetch("http://localhost/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(login),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    if(data.name){
                        setError({
                            name: data.name
                        });
                    }else if(data.password){
                        setError({
                            password: data.password
                        });
                    }else{
                        setError({});
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            console.log('Form has errors. Cannot submit.');
        }
    }

    return (
        <div className = "flex items-center w-full h-full">
            <div className = "flex flex-col text-4xl indent-4 w-full justify-center">
                <h1 className = "text-gray-800 mb-5">Login</h1>
                <input
                    type="text"
                    className='indent-2 rounded-lg border-2 dark:border-pink-300 m-4 h-9 text-gray-400 text-lg bg-white focus:dark:border-pink-600 transition duration-400 outline-none'
                    onChange={handleInputChange}
                    name = "name"
                    value = {login.name}
                    placeholder = "Username or email"
                />
                <p className = "text-lg text-pink-400">{error.name}</p>
                <input
                    type="password"
                    className='indent-2 rounded-lg border-2 dark:border-pink-300 m-4 h-9 text-gray-400 text-lg bg-white focus:dark:border-pink-600 transition duration-400 outline-none'
                    onChange={handleInputChange}
                    name = "password"
                    value = {login.password}
                    placeholder = "Password..."
                />
                <p className = "text-lg text-pink-400">{error.password}</p>
                <button
                    className = "border dark:border-pink-800 m-4 h-8 text-lg bg-pink-500 text-white rounded-lg hover:bg-pink-300 transition duration-400"
                    onClick={handleLogin}
                >
                    Sign in
                </button>
            </div>
        </div>
    );
};

export default LoginForm;