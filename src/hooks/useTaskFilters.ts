import { useMemo } from 'react';
import { Task } from '../types/task';

export type FilterOptions = {
  status: 'all' | Task['status'];
  priority: 'all' | Task['priority'];
};

export const useTaskFilters = (
  tasks: Task[],
  filters: FilterOptions
): Task[] => {
  return useMemo(() => {
    return tasks.filter((task) => {
      const statusMatch = filters.status === 'all' || task.status === filters.status;
      const priorityMatch = filters.priority === 'all' || task.priority === filters.priority;
      return statusMatch && priorityMatch;
    });
  }, [tasks, filters]);
};
