interface Task {
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: 'NextJS' | 'Tailwind' | 'UX';
}

export const tasks: Task[] = [
  {
    title: 'Build a Dynamic Blog',
    description: 'Create a blog with dynamic routing, MDX support, and a beautiful reading experience',
    difficulty: 'Medium',
    category: 'NextJS'
  },
  {
    title: 'Authentication System',
    description: 'Implement a secure authentication system with social login options',
    difficulty: 'Hard',
    category: 'NextJS'
  },
  {
    title: 'Responsive Dashboard',
    description: 'Design a responsive admin dashboard with interactive charts and widgets',
    difficulty: 'Medium',
    category: 'Tailwind'
  },
  {
    title: 'Landing Page Animation',
    description: 'Create smooth scroll animations and micro-interactions for a landing page',
    difficulty: 'Medium',
    category: 'Tailwind'
  },
  {
    title: 'User Onboarding Flow',
    description: 'Design an intuitive onboarding experience with progress tracking',
    difficulty: 'Medium',
    category: 'UX'
  },
  {
    title: 'Mobile Navigation Pattern',
    description: 'Create an innovative mobile navigation pattern with smooth transitions',
    difficulty: 'Hard',
    category: 'UX'
  }
];

export function getRandomTask(category?: string): Task {
  const filteredTasks = category 
    ? tasks.filter(task => task.category === category)
    : tasks;
  return filteredTasks[Math.floor(Math.random() * filteredTasks.length)];
}