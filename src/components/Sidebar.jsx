import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

function Sidebar(){
    const location = useLocation();
    const [currentRoute, setCurrentRoute] = useState('');

    useEffect(() => {
        setCurrentRoute(location.pathname);
    }, [location.pathname]);
    return(
      <>
          <div className="flex w-[250px] flex-col bg-neutral-100 fixed h-screen p-4 border-r-2 max-sm:w-[74px] max-[500px]:hidden
          dark:bg-[#1d2125] dark:text-[#b6c2cf] dark:border-[#282f35]">
              <div className="h-[100px] flex">
                  {/*<img className="mx-auto" src="/images/giraLogo.svg" />*/}
              </div>
              <div className="w-full flex justify-center mb-[5px]">
                  <div className="h-[2px] bg-[#e5e7eb] w-full dark:bg-[#282f35]"></div>
              </div>
              <Link to="/Home"
                    className={`flex h-[40px] rounded-sm px-2 py-[5px] mb-2 items-center justify-between ${
                        currentRoute === '/Home' ? 'bg-[#06b6d44a] dark:bg-[#8b5cf64a]' : 'hover:bg-[#06b6d44a] dark:hover:bg-[#8b5cf64a]'
                    }`}
              >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                  </svg>
                  <span className="flex items-center max-sm:hidden">Dashboard</span>
              </Link>
              <Link to="/project"
                    className={`flex h-[40px] rounded-sm px-2 py-[5px] mb-2 items-center justify-between ${
                        currentRoute === '/project' ? 'bg-[#06b6d44a] dark:bg-[#8b5cf64a]' : 'hover:bg-[#06b6d44a] dark:hover:bg-[#8b5cf64a]'
                    }`}
              >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                  <span className="flex items-center max-sm:hidden">Projects</span>
              </Link>
              <Link to="/ProjectCalendarPicker"
                    className={`flex h-[40px] rounded-sm px-2 py-[5px] mb-2 items-center justify-between ${
                        currentRoute === '/calendar' ? 'bg-[#06b6d44a] dark:bg-[#8b5cf64a]' : 'hover:bg-[#06b6d44a] dark:hover:bg-[#8b5cf64a]'
                    }`}
              >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                  </svg>
                  <span className="flex items-center max-sm:hidden">Calendar</span>
              </Link>
              <div className="w-full flex justify-center mb-[5px]">
                  <div className="h-[2px] bg-[#e5e7eb] w-full dark:bg-[#282f35]"></div>
              </div>
              <Link to="/newProject"
                    className={`flex h-[40px] rounded-sm px-2 py-[5px] mb-2 items-center justify-between ${
                        currentRoute === '/newProject' ? 'bg-[#06b6d44a] dark:bg-[#8b5cf64a]' : 'hover:bg-[#06b6d44a] dark:hover:bg-[#8b5cf64a]'
                    }`}
              >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                  </svg>
                  <span className="flex items-center max-sm:hidden">New Project</span>
              </Link>
              <Link to="/newTask"
                    className={`flex h-[40px] rounded-sm px-2 py-[5px] mb-2 items-center justify-between ${
                        currentRoute === '/newTask' ? 'bg-[#06b6d44a] dark:bg-[#8b5cf64a]' : 'hover:bg-[#06b6d44a] dark:hover:bg-[#8b5cf64a]'
                    }`}
              >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
                  </svg>
                  <span className="flex items-center max-sm:hidden">New Task</span>
              </Link>
          </div>
      </>
    );
}
export default Sidebar;