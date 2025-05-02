import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Link } from 'react-router-dom';
import TaskList from '../components/TaskList';

const Dashboard = () => {
  const { tasks } = useTaskContext();

  return (
    <div style={{ padding: '2rem', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
        <h2 style={{ fontWeight: 800, fontSize: 40, marginBottom: 32, textAlign: 'center' }}>Task Management</h2>
        <Link to="/create-task">
          <button style={{ background: '#111', color: '#fff', border: 'none', borderRadius: 6, padding: '10px 24px', fontWeight: 700, fontSize: 22, cursor: 'pointer' }}>
            + Add Task
          </button>
        </Link>
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Dashboard;
