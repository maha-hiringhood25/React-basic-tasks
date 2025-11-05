import React, { useEffect, useState } from 'react';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import "./App.css"

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask, index) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
  setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="app-container">
      <h1>📝 Task Tracker</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      {tasks.length > 0 && (
        <button className="clear-btn" onClick={clearTasks}>
          Clear All Tasks
        </button>
      )}
      </div>
  );
}

