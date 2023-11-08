import {Link} from "react-router-dom";

function Sidebar(){
    return(
      <>
          <div className="flex w-[250px] flex-col bg-neutral-100 fixed h-screen p-4 border-r-2">
              <div className="h-[100px] flex">
                  <img className="mx-auto" src="/images/giraLogo.svg" />
              </div>
              <div className="w-full flex justify-center mb-[5px]">
                  <div className="h-[2px] bg-[#e5e7eb] w-[95%]"></div>
              </div>
              <Link to="/dashboard" className="flex h-[30px] hover:bg-neutral-300 rounded-sm px-2 mb-2">
                  <div className="flex">
                      <img src="/images/7.svg" alt="Image 1" />
                  </div>
                  <span className="flex items-center">Dashboard</span>
              </Link>
              <Link to="/dashboard" className="flex h-[30px] hover:bg-neutral-300 rounded-sm px-2 mb-2">
                  <div className="flex">
                      <img src="/images/8.svg" alt="Image 1" />
                  </div>
                  <span className="flex items-center">Projects</span>
              </Link>
              <Link to="/dashboard" className="flex h-[30px] hover:bg-neutral-300 rounded-sm px-2 mb-2">
                  <div className="flex">
                      <img src="/images/4.svg" alt="Image 1" />
                  </div>
                  <span className="flex items-center">Calendar</span>
              </Link>
          </div>
      </>
    );
}
export default Sidebar;