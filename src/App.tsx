// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CreateTaskPage from './pages/CreateTaskPage';
import EditTaskPage from './pages/EditTaskPage';
import FilterOperationsPage from './pages/FilterOperationsPage';
import TaskDetailPage from './pages/TaskDetailPage';
import { TaskProvider } from './context/TaskContext';
import MainLayout from './components/MainLayout';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <Router>
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
        </Router>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;