import Sidebar from "./Sidebar";

function TasksForProject(){
    return(
      <>
          <div className="flex w-[100vw]">
              <Sidebar />
              <div className="flex w-full ms-[250px] p-[20px] flex-col">
                  <div className="p-5">
                      <h1 className="font-bold text-2xl text-neutral-700">Project 2</h1>
                  </div>
                  <div>

                  </div>
                  <div className="w-full p-5 flex justify-between flex-wrap">
                      <div className="w-72 bg-neutral-100 rounded-sm max-h-full p-2 flex flex-col drop-shadow-sm">
                          <div className="text-neutral-500 font-medium pt-1 pb-2">TO DO 2</div>
                          <div className="tasks-cont bg-white p-4 rounded-sm min-h-[125px] mb-2 drop-shadow-sm">
                              <div className="text-neutral-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                              <div className="flex justify-between h-8 mt-2">
                                  <div className="flex w-1/2">
                                      <button className="font-semibold px-4 hover:bg-[#fcfcfc] rounded-sm text-neutral-500">
                                          &gt;
                                      </button>
                                  </div>
                                  <div className="flex w-1/2 justify-end">
                                      <div className="flex items-center me-2 uppercase font-bold text-neutral-400">REI</div>
                                      <div className="flex rounded-full overflow-hidden">
                                          <img src="/images/profilePicBlank.jpeg"/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="tasks-cont bg-white p-4 rounded-sm min-h-[125px] mb-2 drop-shadow-sm">
                              <div className="text-neutral-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                              <div className="flex justify-between h-8 mt-2">
                                  <div className="flex w-1/2">
                                      <button className="font-semibold px-4 hover:bg-[#fcfcfc] rounded-sm text-neutral-500">
                                          &gt;
                                      </button>
                                  </div>
                                  <div className="flex w-1/2 justify-end">
                                      <div className="flex items-center me-2 uppercase font-bold text-neutral-400">REI</div>
                                      <div className="flex rounded-full overflow-hidden">
                                          <img src="/images/profilePicBlank.jpeg"/>
                                      </div>
                                  </div>
                              </div>
                          </div>

                      </div>
                      <div className="w-72 bg-neutral-100	rounded-sm max-h-full p-2 flex flex-col drop-shadow-sm">
                          <div className="text-neutral-500 font-medium pt-1 pb-2">IN PROGRESS 0</div>
                          <div className="tasks-cont bg-white p-4 rounded-sm min-h-[125px] mb-2 drop-shadow-sm">
                              <div className="text-neutral-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
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
                                      <div className="flex items-center me-2 uppercase font-bold text-neutral-400">REI</div>
                                      <div className="flex rounded-full overflow-hidden">
                                          <img src="/images/profilePicBlank.jpeg"/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="w-72 bg-neutral-100	rounded-sm max-h-full p-2 flex flex-col drop-shadow-sm">
                          <div className="text-neutral-500 font-medium pt-1 pb-2">DONE 0</div>

                      </div>
                  </div>
              </div>
          </div>
      </>
    );
}
export default TasksForProject;