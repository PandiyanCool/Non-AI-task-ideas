import { Task } from '../types';
import { nextjsTasks } from './nextjs';
import { tailwindTasks } from './tailwind';
import { uxTasks } from './ux';

export const tasks: Task[] = [...nextjsTasks, ...tailwindTasks, ...uxTasks];

export function getRandomTask(category?: string): Task {
  const filteredTasks = category 
    ? tasks.filter(task => task.category === category)
    : tasks;
  return filteredTasks[Math.floor(Math.random() * filteredTasks.length)];
}