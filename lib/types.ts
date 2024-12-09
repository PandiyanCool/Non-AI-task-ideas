export interface Task {
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: 'NextJS' | 'Tailwind' | 'UX';
}