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
    <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #f0f1f2', padding: 32, display: 'flex', flexDirection: 'column', gap: 12, minHeight: 220 }}>
      <h3 style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>{task.title}</h3>
      <p style={{ margin: '10px 0', color: '#444', fontSize: 18 }}>{task.description}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, marginBottom: 12 }}>
        <span>Status: <b>{task.status}</b></span>
        <span>Priority: <b>{task.priority}</b></span>
      </div>
      <div style={{ display: 'flex', gap: 12, marginTop: 'auto' }}>
        <button onClick={() => deleteTask(task.id)} style={{ background: '#f44336', color: '#fff', border: 'none', borderRadius: 6, padding: '10px 28px', fontWeight: 700, fontSize: 18, cursor: 'pointer' }}>
          Delete
        </button>
        <Link to={`/edit/${task.id}`} style={{ textDecoration: 'none' }}>
          <button style={{ background: '#1976d2', color: '#fff', border: 'none', borderRadius: 6, padding: '10px 28px', fontWeight: 700, fontSize: 18, cursor: 'pointer' }}>Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default TaskItem;