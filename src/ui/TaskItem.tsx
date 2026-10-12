import clsx from "clsx"
import { type GlobalTaskListItemJsonApiData } from "../dal/api"
import styles from './TaskItem.module.css'


type Props = {
  task: GlobalTaskListItemJsonApiData
  isSelected: boolean,
  onTaskSelect: (taskId: string | null) => void
  onBoardSelect: (boardId: string | null) => void
}



export function TaskItem({task, isSelected, onTaskSelect, onBoardSelect}: Props) {
  const collorTasks = [
  "#ffffff", // 0
  "#ffd7b5", // 1
  "#ffb38a", // 2
  "#ff9248", // 3
  "#ff6700", // 4
];

const taskClassName = clsx({
  [styles.default]: true,
  [styles.task]: true,
  [styles.selected]: isSelected,
})

const titleClassName = clsx({
  [styles.taskTitle]: task.attributes.status
})

  return (
    <div
      key={task.id}
      className={taskClassName}
      style={{backgroundColor: collorTasks[task.attributes.priority]}}
      onClick={() => {
        onTaskSelect(task.id);
        onBoardSelect(task.attributes.boardId);
      }}>
      <p>
        <b>Заголовок: </b>
        <span className={titleClassName}>{task.attributes.title}</span>
      </p>
      Статус:{" "}
      <input type="checkbox" checked={task.attributes.status} />
      <p>
        <b>Дата создания: </b>
        {new Date(task.attributes.addedAt).toLocaleDateString()}
      </p>
    </div>
  );
}
