import { useState } from 'react';

export function useTaskId() {
  const [taskId, setTaskId] = useState<string | null>(null);

  return { taskId, setTaskId };
}
