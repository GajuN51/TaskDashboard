import { useParams, useNavigate } from 'react-router-dom';
import { useTaskContext } from '../context/TaskContext';

const TaskDetailPage = () => {
  const { id } = useParams();
  const { tasks } = useTaskContext();
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Task Not Found</h2>
        <button onClick={() => navigate(-1)}>⬅ Go Back</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📝 Task Details</h2>
      <p><strong>Title:</strong> {task.title}</p>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <p><strong>Priority:</strong> {task.priority}</p>
      <p><strong>Created At:</strong> {task.createdAt.toLocaleString()}</p>
      {task.dueDate && <p><strong>Due Date:</strong> {new Date(task.dueDate).toLocaleDateString()}</p>}
      <button onClick={() => navigate('/')}>⬅ Back to Dashboard</button>
    </div>
  );
};

export default TaskDetailPage;
