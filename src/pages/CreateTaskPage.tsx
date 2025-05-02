import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTaskActions } from '../hooks/useTaskActions';
import { validateTask } from '../utils/taskValidation';

const CreateTaskPage = () => {
  const { addTask } = useTaskActions();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<'todo' | 'in-progress' | 'completed'>('todo');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('low');
  const [dueDate, setDueDate] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const taskData = {
      title,
      description,
      status,
      priority,
      dueDate: dueDate ? new Date(dueDate) : undefined,
    };
    const validationErrors = validateTask(taskData);
    if (validationErrors.length > 0) {
      const errorMap: { [key: string]: string } = {};
      validationErrors.forEach((error) => {
        if (error.includes('Title')) errorMap.title = error;
        else if (error.includes('Description')) errorMap.description = error;
        else if (error.includes('Due date')) errorMap.dueDate = error;
        else if (error.includes('status')) errorMap.status = error;
        else if (error.includes('priority')) errorMap.priority = error;
      });
      setErrors(errorMap);
      return;
    }
    addTask(taskData);
    navigate('/dashboard');
  };

  const inputStyle = {
    width: '100%',
    padding: 14,
    borderRadius: 8,
    border: '1.5px solid #ccc',
    fontSize: 16,
    marginBottom: 0,
    background: '#fff',
    color: '#222',
    outline: 'none',
  };
  const labelStyle = {
    display: 'block',
    marginBottom: 8,
    fontWeight: 600,
  };
  const errorStyle = {
    color: '#f44336',
    fontSize: 14,
    marginTop: 4,
  };
  const buttonStyle = {
    padding: '10px 24px',
    borderRadius: 6,
    fontWeight: 700,
    fontSize: 16,
    cursor: 'pointer',
    border: 'none',
  };

  return (
    <div style={{ maxWidth: 650, margin: '48px auto', background: '#fff', borderRadius: 14, boxShadow: '0 2px 16px #f0f1f2', padding: 36 }}>
      <h2 style={{ textAlign: 'center', marginBottom: 32, fontSize: 32, fontWeight: 800 }}>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 22 }}>
          <label style={labelStyle}>Title</label>
          <input
            type="text"
            placeholder="e.g., Task title"
            value={title}
            onChange={e => { setTitle(e.target.value); setErrors(prev => ({ ...prev, title: '' })); }}
            style={inputStyle}
          />
          {errors.title && <div style={errorStyle}>{errors.title}</div>}
        </div>
        <div style={{ marginBottom: 22 }}>
          <label style={labelStyle}>Description</label>
          <input
            type="text"
            placeholder="e.g., Task description"
            value={description}
            onChange={e => { setDescription(e.target.value); setErrors(prev => ({ ...prev, description: '' })); }}
            style={inputStyle}
          />
          {errors.description && <div style={errorStyle}>{errors.description}</div>}
        </div>
        <div style={{ marginBottom: 22 }}>
          <label style={labelStyle}>Status</label>
          <select
            value={status}
            onChange={e => { setStatus(e.target.value as any); setErrors(prev => ({ ...prev, status: '' })); }}
            style={inputStyle}
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          {errors.status && <div style={errorStyle}>{errors.status}</div>}
        </div>
        <div style={{ marginBottom: 22 }}>
          <label style={labelStyle}>Priority</label>
          <select
            value={priority}
            onChange={e => { setPriority(e.target.value as any); setErrors(prev => ({ ...prev, priority: '' })); }}
            style={inputStyle}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          {errors.priority && <div style={errorStyle}>{errors.priority}</div>}
        </div>
        <div style={{ marginBottom: 32 }}>
          <label style={labelStyle}>Due Date</label>
          <input
            type="date"
            placeholder="e.g., 2024-06-01"
            value={dueDate}
            onChange={e => { setDueDate(e.target.value); setErrors(prev => ({ ...prev, dueDate: '' })); }}
            style={inputStyle}
          />
          {errors.dueDate && <div style={errorStyle}>{errors.dueDate}</div>}
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
          <button type="button" onClick={() => navigate('/dashboard')} style={{ ...buttonStyle, background: '#f4f4f4', color: '#222' }}>Cancel</button>
          <button type="submit" style={{ ...buttonStyle, background: '#4f46e5', color: '#fff' }}>Create Task</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTaskPage;