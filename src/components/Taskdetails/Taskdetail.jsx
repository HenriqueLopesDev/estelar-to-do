import {useParams, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./task-detail.css";

function TaskDetails( { tasks }){

    const params = useParams();

    const navigate = useNavigate();

    function getdesc(title){
        
        let desc = tasks.filter(tasks => tasks.title === title);

        return(desc[0].description);
    }

    return(
        <>
            <div className="back-button">
                <Button className = "back" onClick={() => navigate(-1)}>Voltar</Button>
            </div>
            <div>
                <h2 className="task-title">{params.taskTitle}</h2>
                <p className="description">{getdesc(params.taskTitle)}</p>
            </div>
        </>
    )
}

export default TaskDetails;