import { TaskDetails } from './ui/TaskDetails';
import { TasksList } from './ui/TasksList';
import { useTaskId } from './bll/useTaskId';
import { useBoardId } from './bll/useBoardId';
import styles from './MainPage.module.css';
import clsx from 'clsx';

const className = clsx({
  [styles.container]: true
})


export function MainPage() {

const {taskId, setTaskId} = useTaskId();
const {boardId, setBoardId} = useBoardId ()


const handleTaskSelect = (id: string | null): void => {
  setTaskId(id)
}

const handleBoardSelect = (board: string | null): void => {
  setBoardId(board)
}
  return (
    <div>
      <div className={className}>
        <TasksList onTaskSelect={handleTaskSelect} onBoardSelect={handleBoardSelect}
        taskId={taskId} 
        />
        <TaskDetails taskId={taskId} boardId={boardId}/>
      </div>
    </div>
  );
}
