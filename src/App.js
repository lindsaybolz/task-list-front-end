import React, { useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';


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
  const toggleComplete = (id) => {
    const newTasks = tasks.map(task =>{
      if (id === task.id) {
       return {
          ...task, 
          isComplete: !task.isComplete}
      }
      return {
        ...task

      }
    })
    setTasks(newTasks)
  }
  const deleteTask = (id) => {
    const newTasks = tasks.map(task => {
      if (id === task.id) {
        return {}
      }
      return {
        ...task
      }
    })
    setTasks(newTasks)
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
