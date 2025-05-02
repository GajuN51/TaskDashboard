// src/components/TaskFilter.tsx
import React from 'react';
import { FilterOptions } from '../hooks/useTaskFilters';

type TaskFilterProps = {
  filters: FilterOptions;
  onChange: (newFilters: FilterOptions) => void;
};

const TaskFilter: React.FC<TaskFilterProps> = ({ filters, onChange }) => {
  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = event.target.value as 'all' | 'todo' | 'in-progress' | 'completed';
    onChange({ ...filters, status: newStatus });
  };

  const handlePriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newPriority = event.target.value as 'all' | 'low' | 'medium' | 'high';
    onChange({ ...filters, priority: newPriority });
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>
        Status:
        <select value={filters.status} onChange={handleStatusChange}>
          <option value="all">All</option>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>
      <label>
        Priority:
        <select value={filters.priority} onChange={handlePriorityChange}>
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
    </div>
  );
};

export default TaskFilter;
