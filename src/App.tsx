// src/App.tsx
import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import MainLayout from './components/MainLayout';
import { ThemeProvider } from './context/ThemeContext';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const CreateTaskPage = lazy(() => import('./pages/CreateTaskPage'));
const EditTaskPage = lazy(() => import('./pages/EditTaskPage'));
const FilterOperationsPage = lazy(() => import('./pages/FilterOperationsPage'));
const TaskDetailPage = lazy(() => import('./pages/TaskDetailPage'));

function KeyboardShortcuts() {
  const navigate = useNavigate();
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (
        e.key.toLowerCase() === 'n' &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.altKey &&
        document.activeElement &&
        ['input', 'textarea'].indexOf(document.activeElement.tagName.toLowerCase()) === -1
      ) {
        e.preventDefault();
        navigate('/create-task');
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [navigate]);
  return null;
}

function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <Router>
          <KeyboardShortcuts />
          <Suspense fallback={<div style={{ textAlign: 'center', marginTop: 40 }}>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route
                path="/dashboard"
                element={
                  <MainLayout>
                    <Dashboard />
                  </MainLayout>
                }
              />
              <Route
                path="/create-task"
                element={
                  <MainLayout>
                    <CreateTaskPage />
                  </MainLayout>
                }
              />
              <Route
                path="/edit/:id"
                element={
                  <MainLayout>
                    <EditTaskPage />
                  </MainLayout>
                }
              />
              <Route
                path="/filter"
                element={
                  <MainLayout>
                    <FilterOperationsPage />
                  </MainLayout>
                }
              />
              <Route
                path="/task/:id"
                element={
                  <MainLayout>
                    <TaskDetailPage />
                  </MainLayout>
                }
              />
            </Routes>
          </Suspense>
        </Router>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;