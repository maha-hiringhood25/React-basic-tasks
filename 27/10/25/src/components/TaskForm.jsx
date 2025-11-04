import React, { useState } from 'react';

export default function TaskForm({ addTask }) {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [category, setCategory] = useState('General');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (task.trim() === '') return; // Avoid adding empty tasks
    addTask({ name: task, priority, category, completed: false });
    setTask(''); // Clear input after submission
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div id="inp">
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <span>
          <button type="submit">Add Task</button>
        </span>
        <h1>{task}</h1>
      </div>
      <div id="btns">
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
        <h1>
          {task} | {category} | {priority}
        </h1>
      </div>
    </form>
     );
}

