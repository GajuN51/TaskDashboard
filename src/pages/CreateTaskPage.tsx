import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTaskActions } from '../hooks/useTaskActions';

const CreateTaskPage = () => {
  const { addTask } = useTaskActions();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<'todo' | 'in-progress' | 'completed'>('todo');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('low');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setError('Title and Description are required.');
      return;
    }
    addTask({
      title,
      description,
      status,
      priority,
      dueDate: dueDate ? new Date(dueDate) : undefined,
    });
    navigate('/dashboard');
  };

  return (
    <div style={{ maxWidth: 540, margin: '48px auto', background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px #f0f1f2', padding: 40 }}>
      <h2 style={{ textAlign: 'center', marginBottom: 32, fontSize: 32, fontWeight: 800 }}>Add New Task</h2>
      {error && <p style={{ color: '#f44336', marginBottom: 20, fontSize: 18 }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 22 }}>
          <label style={{ display: 'block', marginBottom: 8, fontSize: 18, fontWeight: 600 }}>Title:</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            style={{ width: '100%', padding: 12, borderRadius: 6, border: '1.5px solid #ccc', fontSize: 18 }}
          />
        </div>
        <div style={{ marginBottom: 22 }}>
          <label style={{ display: 'block', marginBottom: 8, fontSize: 18, fontWeight: 600 }}>Description:</label>
          <input
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
            style={{ width: '100%', padding: 12, borderRadius: 6, border: '1.5px solid #ccc', fontSize: 18 }}
          />
        </div>
        <div style={{ marginBottom: 22 }}>
          <label style={{ display: 'block', marginBottom: 8, fontSize: 18, fontWeight: 600 }}>Status:</label>
          <select value={status} onChange={e => setStatus(e.target.value as any)} style={{ width: '100%', padding: 12, borderRadius: 6, border: '1.5px solid #ccc', fontSize: 18 }}>
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div style={{ marginBottom: 22 }}>
          <label style={{ display: 'block', marginBottom: 8, fontSize: 18, fontWeight: 600 }}>Priority:</label>
          <select value={priority} onChange={e => setPriority(e.target.value as any)} style={{ width: '100%', padding: 12, borderRadius: 6, border: '1.5px solid #ccc', fontSize: 18 }}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div style={{ marginBottom: 32 }}>
          <label style={{ display: 'block', marginBottom: 8, fontSize: 18, fontWeight: 600 }}>Due Date:</label>
          <input
            type="date"
            value={dueDate}
            onChange={e => setDueDate(e.target.value)}
            style={{ width: '100%', padding: 12, borderRadius: 6, border: '1.5px solid #ccc', fontSize: 18 }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: 16, background: '#1976d2', color: '#fff', border: 'none', borderRadius: 6, fontWeight: 800, fontSize: 22, cursor: 'pointer' }}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default CreateTaskPage;