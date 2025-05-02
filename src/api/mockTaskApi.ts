import { Task } from '../types/task';

const STORAGE_KEY = 'tasks';

let mockTasks: Task[] = [];

// Initialize from localStorage
try {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored) mockTasks = JSON.parse(stored).map((t: any) => ({ ...t, createdAt: new Date(t.createdAt), dueDate: t.dueDate ? new Date(t.dueDate) : undefined }));
} catch {}

const save = () => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(mockTasks));
};

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const mockTaskApi = {
  async getTasks() {
    await delay(500);
    if (Math.random() < 0.05) throw new Error('Failed to fetch tasks');
    return [...mockTasks];
  },
  async addTask(task: Omit<Task, 'id' | 'createdAt'>) {
    await delay(400);
    if (Math.random() < 0.05) throw new Error('Failed to add task');
    const newTask: Task = {
      ...task,
      id: Math.random().toString(36).slice(2),
      createdAt: new Date(),
    };
    mockTasks.push(newTask);
    save();
    return newTask;
  },
  async updateTask(updated: Task) {
    await delay(400);
    if (Math.random() < 0.05) throw new Error('Failed to update task');
    mockTasks = mockTasks.map(t => t.id === updated.id ? updated : t);
    save();
    return updated;
  },
  async deleteTask(id: string) {
    await delay(300);
    if (Math.random() < 0.05) throw new Error('Failed to delete task');
    mockTasks = mockTasks.filter(t => t.id !== id);
    save();
    return id;
  },
  async getTask(id: string) {
    await delay(300);
    if (Math.random() < 0.05) throw new Error('Failed to fetch task');
    return mockTasks.find(t => t.id === id) || null;
  }
}; 