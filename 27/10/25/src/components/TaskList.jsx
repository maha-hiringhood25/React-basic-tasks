import React from 'react';

export default function TaskList({ tasks, updateTask, deleteTask }) {
  const toggleComplete = (index) => {
    const updatedTask = {
      ...tasks[index],
      completed: !tasks[index].completed,
    };
    updateTask(updatedTask, index);
  };

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? 'completed' : ''}>
          <span>{task.name}</span>
          <button onClick={() => toggleComplete(index)}>
            {task.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
