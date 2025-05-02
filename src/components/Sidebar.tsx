// src/components/Sidebar.tsx
import { LayoutDashboard, Filter } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();
  return (
    <div style={{
      width: 320,
      background: '#fff',
      minHeight: '100vh',
      boxShadow: '2px 0 8px #f0f1f2',
      padding: '0 0 0 0'
    }}>
      <h1 style={{
        fontWeight: 800,
        fontSize: 48,
        color: '#0a1857',
        margin: '32px 0 40px 18px',
        lineHeight: 1.1
      }}>Task<br />Dashboard</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Link to="/dashboard" style={{
          display: 'flex', alignItems: 'center', padding: '18px', borderRadius: 12, margin: 12,
          background: location.pathname === '/dashboard' ? '#e6eaff' : 'transparent',
          color: location.pathname === '/dashboard' ? '#0a1857' : '#222',
          fontWeight: 700, fontSize: 24, textDecoration: 'none', border: location.pathname === '/dashboard' ? '2px solid #222' : '2px solid transparent'
        }}>
          <LayoutDashboard style={{ marginRight: 16, fontSize: 28 }} /> Task Management
        </Link>
        <Link to="/filter" style={{
          display: 'flex', alignItems: 'center', padding: '18px', borderRadius: 12, margin: 12,
          background: location.pathname === '/filter' ? '#e6eaff' : 'transparent',
          color: location.pathname === '/filter' ? '#0a1857' : '#222',
          fontWeight: 700, fontSize: 24, textDecoration: 'none', border: location.pathname === '/filter' ? '2px solid #222' : '2px solid transparent'
        }}>
          <Filter style={{ marginRight: 16, fontSize: 28 }} /> Filter Operations
        </Link>
      </div>
    </div>
  );
}