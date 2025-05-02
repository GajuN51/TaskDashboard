import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTaskActions } from '../hooks/useTaskActions';
import { validateTask } from '../utils/taskValidation';

const CreateTaskPage = () => {
  const navigate = useNavigate();
  const { addTask } = useTaskActions();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<'todo' | 'in-progress' | 'completed'>('todo');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('low');
  const [dueDate, setDueDate] = useState<string>('');
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
    navigate('/');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setErrors((prev) => ({ ...prev, title: '' }));
            }}
            required
            style={{
              width: '100%',
              padding: '8px',
              border: errors.title ? '1px solid #ff9800' : '1px solid #ddd',
              borderRadius: '4px',
            }}
          />
          {errors.title && (
            <p
              style={{
                color: '#fff',
                backgroundColor: '#ff9800',
                padding: '5px 10px',
                borderRadius: '4px',
                marginTop: '5px',
                fontSize: '14px',
                fontWeight: 'bold',
              }}
            >
              {errors.title}
            </p>
          )}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setErrors((prev) => ({ ...prev, description: '' }));
            }}
            required
            style={{
              width: '100%',
              padding: '8px',
              border: errors.description ? '1px solid #ff9800' : '1px solid #ddd',
              borderRadius: '4px',
            }}
          />
          {errors.description && (
            <p
              style={{
                color: '#fff',
                backgroundColor: '#ff9800',
                padding: '5px 10px',
                borderRadius: '4px',
                marginTop: '5px',
                fontSize: '14px',
                fontWeight: 'bold',
              }}
            >
              {errors.description}
            </p>
          )}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as 'todo' | 'in-progress' | 'completed')}
            style={{
              width: '100%',
              padding: '8px',
              border: errors.status ? '1px solid #ff9800' : '1px solid #ddd',
              borderRadius: '4px',
            }}
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          {errors.status && (
            <p
              style={{
                color: '#fff',
                backgroundColor: '#ff9800',
                padding: '5px 10px',
                borderRadius: '4px',
                marginTop: '5px',
                fontSize: '14px',
                fontWeight: 'bold',
              }}
            >
              {errors.status}
            </p>
          )}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Priority:</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
            style={{
              width: '100%',
              padding: '8px',
              border: errors.priority ? '1px solid #ff9800' : '1px solid #ddd',
              borderRadius: '4px',
            }}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          {errors.priority && (
            <p
              style={{
                color: '#fff',
                backgroundColor: '#ff9800',
                padding: '5px 10px',
                borderRadius: '4px',
                marginTop: '5px',
                fontSize: '14px',
                fontWeight: 'bold',
              }}
            >
              {errors.priority}
            </p>
          )}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Due Date:</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => {
              setDueDate(e.target.value);
              setErrors((prev) => ({ ...prev, dueDate: '' }));
            }}
            style={{
              width: '100%',
              padding: '8px',
              border: errors.dueDate ? '1px solid #ff9800' : '1px solid #ddd',
              borderRadius: '4px',
            }}
          />
          {errors.dueDate && (
            <p
              style={{
                color: '#fff',
                backgroundColor: '#ff9800',
                padding: '5px 10px',
                borderRadius: '4px',
                marginTop: '5px',
                fontSize: '14px',
                fontWeight: 'bold',
              }}
            >
              {errors.dueDate}
            </p>
          )}
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTaskPage;