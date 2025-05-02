import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Link } from 'react-router-dom';
import TaskList from '../components/TaskList';

const Dashboard = () => {
  const { tasks } = useTaskContext();

  return (
    <div style={{ padding: '2rem', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h2 style={{ fontWeight: 800, fontSize: '1.7rem', marginBottom: 24, textAlign: 'center' }}>Task Management</h2>
        <Link to="/create-task">
          <button style={{ background: '#111', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 18px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
            + Add Task
          </button>
        </Link>
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Dashboard;
