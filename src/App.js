import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios'


const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(TASKS)
  useEffect(() => {
    axios.get('http://localhost:5000/tasks').then(response => {
    console.log("in then", response.data) 

    setTasks(response.data)
    })
    .catch(error => {console.log("in error",error.response.data)})
  },[])

  const toggleComplete = (id) => {
    axios.patch(`http://localhost:5000/tasks/${id}/mark_complete`)
    .then(response => {
      const newTasks = tasks.map(task =>{
        if (id === task.id) {
          return {
            ...task, 
            isComplete: !task.isComplete}
          }
        return {
          ...task
        }
      });
      setTasks(newTasks) 
    })
  }
  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`)
    .then(response => {
      const newTasks = tasks.map(task =>{
        if (id === task.id) {
          return {}
        }
        return {
          ...task
        }
      });
      setTasks(newTasks) 
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={tasks} toggleComplete={ toggleComplete } deleteTask={ deleteTask } />}</div>
      </main>
    </div>
  );
};

export default App;
