import { useTaskContext } from '../context/TaskContext';
import { Task } from '../types/task';

export const useTaskActions = () => {
  const { addTask, deleteTask, editTask } = useTaskContext();

  return {
    addTask,
    deleteTask,
    editTask,
  };
};
