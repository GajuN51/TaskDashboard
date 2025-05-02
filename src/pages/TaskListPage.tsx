import React from 'react';
import TaskList from '../components/TaskList';
import TaskFilter from '../components/TaskFilter';
import { Link } from 'react-router-dom';

const TaskListPage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1> Task Dashboard</h1>
      <TaskFilter />
      <TaskList />
      <Link to="/create">
        <button style={{ marginTop: '1rem' }}>Add New Task</button>
      </Link>
    </div>
  );
};

export default TaskListPage;
