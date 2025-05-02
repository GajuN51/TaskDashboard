import { LayoutDashboard, Filter, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Sidebar() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="sidebar" style={{
      width: 260,
      minHeight: '100vh',
      boxShadow: theme === 'light' ? '2px 0 8px #f0f1f2' : '2px 0 8px rgba(0,0,0,0.2)',
      padding: 0,
      backgroundColor: 'var(--bg-secondary)'
    }}>
      <h1 className="heading" style={{
        fontWeight: 800,
        fontSize: '2.2rem',
        margin: '24px 0 28px 14px',
        lineHeight: 1.1,
        color: 'var(--text-heading)'
      }}>Dashboard</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        <Link to="/dashboard" style={{
          display: 'flex', 
          alignItems: 'center', 
          padding: '12px', 
          borderRadius: 8, 
          margin: 8,
          background: location.pathname === '/dashboard' ? 'var(--sidebar-active-bg)' : 'transparent',
          color: location.pathname === '/dashboard' ? 'var(--text-heading)' : 'var(--text-main)',
          fontWeight: 700, 
          fontSize: '1.15rem', 
          textDecoration: 'none', 
          border: location.pathname === '/dashboard' 
            ? `2px solid ${theme === 'light' ? '#222' : '#ccc'}`
            : '2px solid transparent'
        }}>
          <LayoutDashboard style={{ marginRight: 10, fontSize: 20 }} /> Task Management
        </Link>
        
        <Link to="/filter" style={{
          display: 'flex', 
          alignItems: 'center', 
          padding: '12px', 
          borderRadius: 8, 
          margin: 8,
          background: location.pathname === '/filter' ? 'var(--sidebar-active-bg)' : 'transparent',
          color: location.pathname === '/filter' ? 'var(--text-heading)' : 'var(--text-main)',
          fontWeight: 700, 
          fontSize: '1.15rem', 
          textDecoration: 'none', 
          border: location.pathname === '/filter' 
            ? `2px solid ${theme === 'light' ? '#222' : '#ccc'}`
            : '2px solid transparent'
        }}>
          <Filter style={{ marginRight: 10, fontSize: 20 }} /> Filter Operations
        </Link>
      </div>
      
      <button 
        onClick={toggleTheme} 
        className="theme-toggle-btn"
        style={{
          margin: '32px 0 0 14px',
          padding: '10px 16px',
          borderRadius: 8,
          border: 'none',
          background: theme === 'light' ? 'var(--btn-secondary-bg)' : 'var(--sidebar-active-bg)',
          color: 'var(--text-main)',
          fontWeight: 700,
          fontSize: 16,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
      >
        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}