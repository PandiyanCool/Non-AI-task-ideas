'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TaskCardProps {
  title: string;
  description: string;
  difficulty: string;
  category: string;
}

const difficultyColors = {
  Easy: 'bg-green-500 hover:bg-green-600',
  Medium: 'bg-yellow-500 hover:bg-yellow-600',
  Hard: 'bg-red-500 hover:bg-red-600'
} as const;

export function TaskCard({ title, description, difficulty, category }: TaskCardProps) {
  const difficultyColor = difficultyColors[difficulty as keyof typeof difficultyColors];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      key={title} // Add key to force re-render on task change
    >
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-lg border-2 border-purple-500/20 shadow-xl">
        <CardHeader className="flex flex-row items-center gap-2 pb-2">
          <Sparkles className="w-5 h-5 text-purple-500" />
          <h3 className="text-xl font-bold text-purple-500">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          <div className="flex gap-2">
            <Badge variant="outline" className={difficultyColor}>
              {difficulty}
            </Badge>
            <Badge variant="secondary">{category}</Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}