import React, { createContext, useState, useContext, useEffect } from 'react';
import { Task } from '../types/task';
import { mockTaskApi } from '../api/mockTaskApi';

// Define the context type
export type TaskContextType = {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  addTask: (task: Omit<Task, 'id' | 'createdAt'>) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  editTask: (updatedTask: Task) => Promise<void>;
  reload: () => Promise<void>;
};

// Create the context
const TaskContext = createContext<TaskContextType | undefined>(undefined);

// Provider
export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await mockTaskApi.getTasks();
      setTasks(data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (taskData: Omit<Task, 'id' | 'createdAt'>) => {
    setLoading(true);
    setError(null);
    try {
      await mockTaskApi.addTask(taskData);
      await fetchTasks();
    } catch (err: any) {
      setError(err.message || 'Failed to add task');
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      await mockTaskApi.deleteTask(id);
      await fetchTasks();
    } catch (err: any) {
      setError(err.message || 'Failed to delete task');
    } finally {
      setLoading(false);
    }
  };

  const editTask = async (updatedTask: Task) => {
    setLoading(true);
    setError(null);
    try {
      await mockTaskApi.updateTask(updatedTask);
      await fetchTasks();
    } catch (err: any) {
      setError(err.message || 'Failed to update task');
    } finally {
      setLoading(false);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, loading, error, addTask, deleteTask, editTask, reload: fetchTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

// Hook for accessing the context
export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTaskContext must be used within a TaskProvider');
  return context;
};
