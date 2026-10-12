import clsx from "clsx";
import { useTaskDetails } from "../bll/useTaskDetails";
import styles from './TaskDetails.module.css'

type Props = {
  taskId: string | null
  boardId: string | null
}

const className = clsx({
  [styles.task]: true
})

export const TaskDetails = ({taskId, boardId}: Props) => {

  const {selectedTask} =  useTaskDetails(taskId, boardId)  
  
  return <div className={className}>
          <h3>Task details</h3>
          {taskId === null ? (
            "Task is not selected"
          ) : selectedTask?.id !== taskId ? (
            "Loading..."
          ) : (
            <ul>
              <li>title: {selectedTask.attributes.title}</li>
              <li>boardTitle: {selectedTask.attributes.boardTitle}</li>
              <li>description: {selectedTask.attributes.description}</li>
            </ul>
          )}
        </div>
}