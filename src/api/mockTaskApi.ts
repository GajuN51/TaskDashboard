import { Task } from '../types/task';

let mockTasks: Task[] = [];

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
    return newTask;
  },
  async updateTask(updated: Task) {
    await delay(400);
    if (Math.random() < 0.05) throw new Error('Failed to update task');
    mockTasks = mockTasks.map(t => t.id === updated.id ? updated : t);
    return updated;
  },
  async deleteTask(id: string) {
    await delay(300);
    if (Math.random() < 0.05) throw new Error('Failed to delete task');
    mockTasks = mockTasks.filter(t => t.id !== id);
    return id;
  },
  async getTask(id: string) {
    await delay(300);
    if (Math.random() < 0.05) throw new Error('Failed to fetch task');
    return mockTasks.find(t => t.id === id) || null;
  }
}; 