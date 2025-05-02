// src/components/MainLayout.tsx
import React from 'react';
import Sidebar from './Sidebar';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ display: 'flex', minHeight: '100vh', background: '#f5f6f8' }}>
    <Sidebar />
    <div style={{ flex: 1 }}>{children}</div>
  </div>
);

export default MainLayout;