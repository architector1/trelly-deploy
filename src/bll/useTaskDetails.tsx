import { useState, useEffect } from "react";
import { type TaskDetailsData, getTask } from "../dal/api";

export function useTaskDetails(taskId: string | null, boardId: string | null) {
  const [selectedTask, setSelectedTask] = useState<TaskDetailsData | null>(null);

  useEffect(() => {
    if (!taskId || !boardId) return;

    getTask(taskId, boardId).then((json) => setSelectedTask(json.data));
  }, [taskId]);

  return { selectedTask };
}
