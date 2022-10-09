import {useState, useEffect} from 'react'
import axios from 'axios';
import Apptitle from './components/Apptitle/Apptitle';
import Taskinput from './components/Inputs/Taskinput';
import Taskgroup from './components/Tasksgroup/tasksgroup';
import {v4 as uuidv4} from "uuid";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import TaskDetails from './components/Taskdetails/Taskdetail';
import ErrorPage from './components/Errorpage/Errorpage';

function App(){

  const [tasks, setTask] = useState([{

    id: "1",
    title: "Estudar React",
    description: "Estudar mais os hooks",
    completed: false,
  },{
    id: "2",
    title: "Estudar Hooks",
    description: "Estudar mais useState e demais hooks",
    completed: false,
  }]);

  useEffect(() => {

    const getTasks = async () =>{

      const { data } = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10");

      setTask(data);
    }

    getTasks();

  }, [])

  function addtask(tasktitle, taskdesc){

    const Tasks = [...tasks, {
      id: uuidv4(),
      title: tasktitle,
      description: taskdesc,
      completed: false,
    }];

    setTask(Tasks);
  }

  function completeTask(taskid){

    const updateTasks = tasks.map((tasks) => {
      if(tasks.id === taskid) return {...tasks, completed: !tasks.completed}

      return tasks;
    })

    setTask(updateTasks);

  }

  function removetask(taskId){

    const Tasks = tasks.filter(tasks => tasks.id !== taskId);
    setTask(Tasks);

  }

  return(
    <Router>
        <Routes>
          <Route path = "/" element = { 
            <>
              <div className="container">
                <Apptitle />
                <Taskinput addtask = {addtask} />
                <Taskgroup tasks = {tasks} removetask = {removetask} completeTask = {completeTask} />
              </div>
            </>
          } />
          <Route path = "/:taskTitle" element = {
            <>
              <div className="container">
                <Apptitle />
                <TaskDetails tasks = {tasks} />
              </div>              
            </>
          } />
          <Route path = "*" element = {<ErrorPage />}></Route>
        </Routes>
    </Router>
  )
}

export default App;