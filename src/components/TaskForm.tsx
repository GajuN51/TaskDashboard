import React, { useState } from 'react';
import { Task } from '../types/task';
import { useTaskContext } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';

interface TaskFormProps {
  initialData?: Partial<Task>;
}

const TaskForm: React.FC<TaskFormProps> = ({ initialData = {} }) => {
  const { addTask } = useTaskContext();
  const navigate = useNavigate();

  const [title, setTitle] = useState(initialData.title || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [status, setStatus] = useState<'todo' | 'in-progress' | 'completed'>(initialData.status || 'todo');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>(initialData.priority || 'medium');
  const [dueDate, setDueDate] = useState(initialData.dueDate ? new Date(initialData.dueDate).toISOString().split('T')[0] : '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      status,
      priority,
      createdAt: new Date(),
      dueDate: dueDate ? new Date(dueDate) : undefined,
    };

    addTask(newTask);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 500, marginTop: 20 }}>
      <div>
        <label>Title *</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value as any)}>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div>
        <label>Priority</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value as any)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div>
        <label>Due Date</label>
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      </div>
      <button type="submit" style={{ marginTop: '1rem' }}>
        {initialData.title ? 'Update Task' : 'Create Task'}
      </button>
    </form>
  );
};

export default TaskForm;
