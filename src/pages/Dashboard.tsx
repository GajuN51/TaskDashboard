import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext'; // Import from TaskContext
import { useTaskActions } from '../hooks/useTaskActions';
import { useTaskFilters, FilterOptions } from '../hooks/useTaskFilters';
import TaskList from '../components/TaskList';
import TaskFilter from '../components/TaskFilter';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Access tasks from the TaskContext
  const { tasks } = useTaskContext(); // Get tasks from context
  
  const [filters, setFilters] = useState<FilterOptions>({
    status: 'all',
    priority: 'all',
  });

  // Use the filters with the custom hook
  const filteredTasks = useTaskFilters(tasks, filters);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📋 Task Dashboard</h2>
<Link to="/create-task">
  <button>Create New Task</button>
</Link>
      <TaskFilter filters={filters} onChange={setFilters} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default Dashboard;
