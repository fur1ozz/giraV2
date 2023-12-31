import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const storedDarkMode = localStorage.getItem("darkMode");
    const [isDarkMode, setIsDarkMode] = useState(
        storedDarkMode !== null ? JSON.parse(storedDarkMode) : null
    );

    useEffect(() => {
        if (isDarkMode !== null) {
            if (isDarkMode === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
        }
    }, [isDarkMode]);

    useEffect(() => {
        if (isDarkMode === null) {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setIsDarkMode("dark");
            } else {
                setIsDarkMode("light");
            }
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
    };

    const location = useLocation();
    const [currentRoute, setCurrentRoute] = useState('');

    useEffect(() => {
        setCurrentRoute(location.pathname);
    }, [location.pathname]);

    return (
        <header className="bg-neutral-100 p-4 top-0 w-full sticky z-20 dark:bg-[#1d2125] border-b-2 dark:border-[#282f35]">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-cyan-500 dark:text-violet-500 text-xl font-bold">Gira V2</div>

                {/* Mobile Navigation Toggle */}
                <div className="md:hidden">
                    <button
                        className="focus:outline-none text-cyan-500 hover:text-cyan-600 dark:text-violet-500 dark:hover:text-violet-800"
                        onClick={toggleMobileMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links (Mobile) */}
                {isMobileMenuOpen && (
                    <div className="md:hidden fixed top-16 left-0 w-full h-full bg-neutral-100 dark:bg-[#1d2125] ">
                        <nav className="flex flex-col items-center pt-5">
                            <Link to="/Home" className="text-cyan-500 hover:text-cyan-600 dark:text-violet-500 dark:hover:text-violet-800 py-2 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>{" "}
                                Home
                            </Link>
                            <a href="#" className="text-cyan-500 hover:text-cyan-600 dark:text-violet-500 dark:hover:text-violet-800 py-2 flex" onClick={toggleDarkMode}>
                                {isDarkMode === "dark" ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                    </svg>
                                )}
                                {" "}
                                Dark Mode
                            </a>
                            <Link to="/ContactInfo" className="text-cyan-500 hover:text-cyan-600 dark:text-violet-500 dark:hover:text-violet-800 py-2 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                                {" "}
                                Contact Info
                            </Link>
                            <Link to="/Profile" className="text-cyan-500 hover:text-cyan-600 dark:text-violet-500 dark:hover:text-violet-800 py-2 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                {" "}
                                Profile
                            </Link>
                            <div className="w-full flex justify-center mb-[5px]">
                                <div className="h-[2px] bg-[#e5e7eb] w-full dark:bg-[#282f35]"></div>
                            </div>
                            <Link to="/Home"
                                  className={`flex h-[40px] rounded-sm px-2 py-[5px] mb-2 items-center justify-between ${
                                      currentRoute === '/dashboard' ? 'bg-[#06b6d44a] dark:bg-[#8b5cf64a]' : 'hover:bg-[#06b6d44a] dark:hover:bg-[#8b5cf64a]'
                                  }
                                  text-cyan-500 hover:text-cyan-600 dark:text-violet-500 dark:hover:text-violet-800
                                  `}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                                </svg>
                                <span className="flex items-center">Dashboard</span>
                            </Link>
                            <Link to="/project"
                                  className={`flex h-[40px] rounded-sm px-2 py-[5px] mb-2 items-center justify-between ${
                                      currentRoute === '/project' ? 'bg-[#06b6d44a] dark:bg-[#8b5cf64a]' : 'hover:bg-[#06b6d44a] dark:hover:bg-[#8b5cf64a]'
                                  }
                                  text-cyan-500 hover:text-cyan-600 dark:text-violet-500 dark:hover:text-violet-800
                                  `}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                </svg>
                                <span className="flex items-center ">Projects</span>
                            </Link>
                            <Link to="/ProjectCalendarPicker"
                                  className={`flex h-[40px] rounded-sm px-2 py-[5px] mb-2 items-center justify-between ${
                                      currentRoute === '/calendar' ? 'bg-[#06b6d44a] dark:bg-[#8b5cf64a]' : 'hover:bg-[#06b6d44a] dark:hover:bg-[#8b5cf64a]'
                                  }
                                  text-cyan-500 hover:text-cyan-600 dark:text-violet-500 dark:hover:text-violet-800
                                  `}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                </svg>
                                <span className="flex items-center ">Calendar</span>
                            </Link>
                            <div className="w-full flex justify-center mb-[5px]">
                                <div className="h-[2px] bg-[#e5e7eb] w-full dark:bg-[#282f35]"></div>
                            </div>
                            <Link to="/newProject"
                                  className={`flex h-[40px] rounded-sm px-2 py-[5px] mb-2 items-center justify-between ${
                                      currentRoute === '/newProject' ? 'bg-[#06b6d44a] dark:bg-[#8b5cf64a]' : 'hover:bg-[#06b6d44a] dark:hover:bg-[#8b5cf64a]'
                                  }
                                  text-cyan-500 hover:text-cyan-600 dark:text-violet-500 dark:hover:text-violet-800
                                  `}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                </svg>
                                <span className="flex items-center ">New Project</span>
                            </Link>
                        </nav>
                    </div>
                )}

                {/* Navigation Links (Desktop) */}
                <nav className="hidden md:flex space-x-4">
                    <Link to="/Home" className="text-cyan-500 hover:text-cyan-600 dark:text-violet-500 dark:hover:text-violet-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Link>
                    <button href="#" className="text-cyan-500 hover:text-cyan-600 dark:text-violet-500 dark:hover:text-violet-800" onClick={toggleDarkMode}>
                        {isDarkMode === "dark" ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                        )}
                    </button>
                    <Link to="/ContactInfo" className="text-cyan-500 hover:text-cyan-600 dark:text-violet-500 dark:hover:text-violet-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                    </Link>
                    {localStorage.getItem('token') ?
                        <Link to="/Profile" className="text-cyan-500 hover:text-cyan-600 dark:text-violet-500 dark:hover:text-violet-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </Link>
                        :
                        <Link to="/" className="text-cyan-500 hover:text-cyan-600 dark:text-violet-500 dark:hover:text-violet-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </Link>
                    }
                    {localStorage.getItem('token') &&
                        <Link to = "/" onClick = {() => {localStorage.removeItem('token')}}  className="text-cyan-500 hover:text-cyan-600 dark:text-violet-500 dark:hover:text-violet-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>
                        </Link>
                    }
                </nav>
            </div>
        </header>
    );
}

export default Header;
