'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wand2 } from 'lucide-react';
import { TaskCard } from '@/components/TaskCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getRandomTask } from '@/lib/tasks';
import { Task } from '@/lib/types';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [task, setTask] = useState<Task | null>(null);
  const [category, setCategory] = useState<string>('all');

  useEffect(() => {
    setMounted(true);
    setTask(getRandomTask());
  }, []);

  const generateNewTask = () => {
    setTask(getRandomTask(category === 'all' ? undefined : category));
  };

  if (!mounted || !task) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-4">
            ✨ Magical Task Generator ✨
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
            Get inspired with random development tasks to enhance your skills
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-8">
          <div className="flex gap-4 items-center">
            <Select
              value={category}
              onValueChange={(value) => setCategory(value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="NextJS">Next.js</SelectItem>
                <SelectItem value="Tailwind">Tailwind CSS</SelectItem>
                <SelectItem value="UX">UX Development</SelectItem>
              </SelectContent>
            </Select>

            <Button
              onClick={generateNewTask}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              <Wand2 className="mr-2 h-4 w-4" />
              Generate Task
            </Button>
          </div>

          <TaskCard
            title={task.title}
            description={task.description}
            difficulty={task.difficulty}
            category={task.category}
          />
        </div>
      </div>
    </div>
  );
}