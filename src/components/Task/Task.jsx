import "./main-task.css";
import { CgClose, CgInfo } from 'react-icons/cg';
import { useNavigate } from "react-router-dom";

function Task( { tasks, removetask, completeTask}){

    const navigate = useNavigate();

    function prepareremove(){

        removetask(tasks.id)
    }

    function seedetails(){
        
        navigate(`/${tasks.title}`);
    }

    function complete(){
        completeTask(tasks.id);
    }

    return(
        <>
            <div className="task-container" style = {tasks.completed ? {borderBottom: "2px solid #00FFFF"}: {}}>
                <h3 onClick={complete} className="tasktitle">{tasks.title}</h3>
                <div className="iconsdiv">
                    <button onClick = {seedetails} className="icon"><CgInfo /></button>
                    <button onClick={prepareremove}  className="icon"><CgClose /></button>
                </div>
            </div>
        </>
    )
}

export default Task;