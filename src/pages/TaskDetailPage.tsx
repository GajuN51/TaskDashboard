import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockTaskApi } from '../api/mockTaskApi';
import { Task } from '../types/task';

const TaskDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);
    mockTaskApi.getTask(id)
      .then(t => setTask(t))
      .catch(e => setError(e.message || 'Failed to fetch task'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div style={{ textAlign: 'center', marginTop: 40 }}>Loading...</div>;
  if (error) return <div style={{ color: '#f44336', textAlign: 'center', marginTop: 40 }}>{error}</div>;
  if (!task) return <div style={{ textAlign: 'center', marginTop: 40 }}>Task not found.</div>;

  return (
    <div style={{ maxWidth: 600, margin: '48px auto', background: 'var(--bg-card)', color: 'var(--text-main)', borderRadius: 14, boxShadow: '0 2px 16px #f0f1f2', padding: 36 }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: 24, background: '#f4f4f4', color: 'var(--text-main)', border: 'none', borderRadius: 6, fontWeight: 600, fontSize: 16, padding: '8px 18px', cursor: 'pointer' }}>Back</button>
      <h2 style={{ fontWeight: 800, fontSize: 28, marginBottom: 18 }}>{task.title}</h2>
      <p style={{ fontSize: 18, color: 'var(--text-main)', marginBottom: 18 }}>{task.description}</p>
      <div style={{ fontSize: 16, marginBottom: 8 }}><b>Status:</b> {task.status}</div>
      <div style={{ fontSize: 16, marginBottom: 8 }}><b>Priority:</b> {task.priority}</div>
      <div style={{ fontSize: 16, marginBottom: 8 }}><b>Created At:</b> {task.createdAt ? new Date(task.createdAt).toLocaleString() : '-'}</div>
      <div style={{ fontSize: 16, marginBottom: 8 }}><b>Due Date:</b> {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : '-'}</div>
    </div>
  );
};

export default TaskDetailPage;
