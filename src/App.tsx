// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CreateTaskPage from './pages/CreateTaskPage';
import { TaskProvider } from './context/TaskContext';
import EditTaskPage from './pages/EditTaskPage';
import TaskListPage from './pages/TaskListPage';

function App() {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-task" element={<CreateTaskPage />} />
          {/* <Route path="/edit-task/:id" element={<EditTaskPage />} /> */}
          <Route path="/edit/:id" element={<EditTaskPage />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
}

export default App;
