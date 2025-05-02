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
    <div className="bg-card" style={{ borderRadius: 12, boxShadow: '0 2px 8px #f0f1f2', padding: 20, display: 'flex', flexDirection: 'column', gap: 8, minHeight: 160 }}>
      <h3 className="heading" style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700 }}>{task.title}</h3>
      <p style={{ margin: '8px 0', fontSize: '1rem' }}>{task.description}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', marginBottom: 8 }}>
        <span>Status: <b>{task.status}</b></span>
        <span>Priority: <b>{task.priority}</b></span>
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 'auto' }}>
        <button onClick={() => deleteTask(task.id)} style={{ background: '#f44336', color: '#fff', border: 'none', borderRadius: 5, padding: '7px 18px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
          Delete
        </button>
        <Link to={`/edit/${task.id}`} style={{ textDecoration: 'none' }}>
          <button style={{ background: '#1976d2', color: '#fff', border: 'none', borderRadius: 5, padding: '7px 18px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>Edit</button>
        </Link>
        <Link to={`/task/${task.id}`} style={{ textDecoration: 'none' }}>
          <button style={{ background: '#4f46e5', color: '#fff', border: 'none', borderRadius: 5, padding: '7px 18px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>View</button>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(TaskItem);