// src/components/MainLayout.tsx
import React from 'react';
import Sidebar from './Sidebar';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ display: 'flex', minHeight: '100vh' }}>
    <Sidebar />
    <div className="main-content" style={{ flex: 1 }}>
      {children}
    </div>
  </div>
);

export default MainLayout;