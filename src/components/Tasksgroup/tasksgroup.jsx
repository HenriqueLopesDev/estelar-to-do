import Task from "../Task/Task";

function Taskgroup({tasks, removetask, completeTask}){
    return (

        <div>
           {tasks.map(tasks => <Task key = {tasks.id} tasks= { tasks } removetask = {removetask} completeTask = {completeTask}/>)}
        </div>
    )
}

export default Taskgroup;