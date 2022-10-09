import { useState } from 'react';
import "./task-input.css";
import Button from "../Button/Button.jsx";

function Taskinput({ addtask }){

    const[title, setTitle] = useState('');
    const[desc, setDesc] = useState('');

    function getTitle(title){
        setTitle(title.target.value);
    }

    function getDesc(desc){
        setDesc(desc.target.value);
    }

    function prepareaddiction(){
        addtask(title, desc);
        setTitle("");
        setDesc("");
    }

    return (
        <>
            <div className="task-input">
                <input onChange={getTitle} value = {title} className="taskinputs" type = "text" placeholder="Insira sua tarefa" required></input>
                <input onChange={getDesc} className="taskinputs" type = "text" placeholder="Insira a descrição (opcional)"></input>
                <Button onClick = {prepareaddiction}>Adicionar tarefa</Button>
            </div>
        </>
    )
}

export default Taskinput;