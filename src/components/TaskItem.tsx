import React from 'react';
import { Link } from 'react-router-dom';
import { Task } from '../types/task';
import { useTaskActions } from '../hooks/useTaskActions';

type TaskItemProps = {
  task: Task;
};

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { deleteTask } = useTaskActions(); 

  return (
    <div style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #ddd' }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <button onClick={() => deleteTask(task.id)} style={{ marginRight: '1rem' }}>
        Delete
      </button>
      <Link to={`/edit/${task.id}`}>
        <button style={{ marginRight: '1rem' }}>Edit</button>
      </Link>
    </div>
  );
};

export default TaskItem;