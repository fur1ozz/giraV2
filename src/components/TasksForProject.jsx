
function TasksForProject(){
    return(
      <>
        <div className="flex border-2 border-red-500 w-4/5">
            <div>

            </div>
            <div>

            </div>
            <div className="w-full p-5 flex justify-evenly flex-wrap">
                <div className="w-72 bg-neutral-100	rounded h-72 max-h-full p-2 flex flex-col">
                    <div className="text-neutral-500 font-medium pt-1 pb-2">TO DO 2</div>
                    <div className="tasks-cont bg-white p-3 rounded h-52">
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                    </div>
                </div>
                <div className="w-72 bg-neutral-100	rounded h-72 max-h-full p-2 flex flex-col">
                    <div className="text-neutral-500 font-medium pt-1 pb-2">IN PROGRESS 0</div>

                </div>
                <div className="w-72 bg-neutral-100	rounded h-72 max-h-full p-2 flex flex-col">
                    <div className="text-neutral-500 font-medium pt-1 pb-2">DONE 0</div>

                </div>
            </div>
        </div>
      </>
    );
}
export default TasksForProject;