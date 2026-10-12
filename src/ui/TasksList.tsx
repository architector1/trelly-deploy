import { TaskItem} from "./TaskItem";
import { useTasks } from "../bll/useTasks";



type Props = {
  onTaskSelect: (id: string | null) => void
  onBoardSelect: (boardId: string | null) => void
  taskId: string | null
  
}

export const TasksList = ({onTaskSelect, onBoardSelect, taskId, }: Props) => {

  const {tasks} = useTasks()

  if (tasks == null) {
    return <h1>Загрузка...</h1>;
  }

  if (tasks.length === 0) {
    return <h1>Задачи отсутствуют</h1>;
  }

  const handleClickReset = () => {
    onTaskSelect?.(null)
  }  

  return <div>
          <button
            onClick={handleClickReset}>Reset</button>
          {tasks.map((task) => {
            return (

              <TaskItem 
              key={task.id}
              task={task}
              isSelected={task.id === taskId}
              onTaskSelect={onTaskSelect}
              onBoardSelect={onBoardSelect}
              />


              // <div
              // key={task.id}
              //   style={{
              //     border:
              //       task.id === selectedId
              //         ? "5px solid blue"
              //         : "5px solid black",
              //     backgroundColor: collorTasks[task.attributes.priority],
              //     color: 'black'
              //   }}
              //   onClick={() => {
              //     setSelectedId(task.id);
              //     onTaskSelect(task.id)
              //     onBoardSelect(task.attributes.boardId)
              //   }}
              // >
              //   <p>
              //     <b>Заголовок: </b>
              //     <span
              //       style={{
              //         textDecoration: task.attributes.status
              //           ? "line-through"
              //           : "none",
              //       }}
              //     >
              //       {task.attributes.title}
              //     </span>
              //   </p>
              //   Статус:{" "}
              //   <input type="checkbox" checked={task.attributes.status} />
              //   <p>
              //     <b>Дата создания: </b>
              //     {new Date(task.attributes.addedAt).toLocaleDateString()}
              //   </p>
              // </div>
            );
          })}
        </div>
}

