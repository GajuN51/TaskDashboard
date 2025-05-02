// src/utils/taskValidation.ts
import { Task } from '../types/task';

export const validateTask = (taskData: Partial<Task>): string[] => {
  const errors: string[] = [];

  // Title validation
  if (!taskData.title || taskData.title.trim().length < 3) {
    errors.push('Title must be at least 3 characters long.');
  } else if (!/^[^\d]*$/.test(taskData.title)) {
    errors.push('Title cannot contain numbers.');
  }

  // Description validation
  if (!taskData.description || taskData.description.trim().length < 5) {
    errors.push('Description must be at least 5 characters long.');
  } else if (!/^[^\d]*$/.test(taskData.description)) {
    errors.push('Description cannot contain numbers.');
  }

  // Due date validation
  if (taskData.dueDate) {
    const selectedDate = new Date(taskData.dueDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      errors.push('Due date cannot be in the past.');
    }
  }

  // Status validation
  if (taskData.status && !['todo', 'in-progress', 'completed'].includes(taskData.status)) {
    errors.push('Invalid status.');
  }

  // Priority validation
  if (taskData.priority && !['low', 'medium', 'high'].includes(taskData.priority)) {
    errors.push('Invalid priority.');
  }

  return errors;
};