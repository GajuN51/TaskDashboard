// src/pages/FilterOperationsPage.tsx
import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

export default function FilterOperationsPage() {
  const { tasks } = useTaskContext();
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');
  const [search, setSearch] = useState('');

  const filteredTasks = tasks.filter(task =>
    (status ? task.status === status : true) &&
    (priority ? task.priority === priority : true) &&
    (search ? task.title.toLowerCase().includes(search.toLowerCase()) : true)
  );

  return (
    <div style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}>
      <h2 style={{ fontWeight: 700, fontSize: 32, marginBottom: 24 }}>Filter Operations</h2>
      <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
        <select value={status} onChange={e => setStatus(e.target.value)} style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}>
          <option value="">All Statuses</option>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <select value={priority} onChange={e => setPriority(e.target.value)} style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}>
          <option value="">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input
          type="text"
          placeholder="Search by title"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ flex: 1, padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
        {filteredTasks.length === 0 ? (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', color: '#888' }}>No records available.</div>
        ) : (
          filteredTasks.map(task => (
            <div key={task.id} style={{ background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #f0f1f2', padding: 20 }}>
              <h3 style={{ margin: 0, fontSize: 20 }}>{task.title}</h3>
              <p style={{ margin: '8px 0' }}>{task.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
                <span>Status: <b>{task.status}</b></span>
                <span>Priority: <b>{task.priority}</b></span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}