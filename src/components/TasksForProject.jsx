
function TasksForProject(){
    return(
      <>
        <div className="flex border-2 border-red-500 w-96">
            <div>

            </div>
            <div>

            </div>
            <div className="main-tasks-out-cont">
                <div className="to-do-tasks-cont">
                    <div className="tasks-type-title">TO DO 2</div>
                    <div className="tasks-cont">
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                    </div>
                </div>
                <div className="in-progress-tasks-cont">
                    <div className="tasks-type-title">IN PROGRESS 0</div>

                </div>
                <div className="done-tasks-cont">
                    <div className="tasks-type-title">DONE 0</div>

                </div>
            </div>
        </div>
      </>
    );
}
export default TasksForProject;