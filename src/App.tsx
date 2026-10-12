// import { useEffect, useState } from "react";

// //import "./App.css";


// const collorTasks = [
//   "#ffffff", // 0
//   "#ffd7b5", // 1
//   "#ffb38a", // 2
//   "#ff9248", // 3
//   "#ff6700", // 4
// ];

// export function App() {
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [selectedId, setSelectedId] = useState(null);
//   const [tasks, setTasks] = useState(null);
//   const [boardId, setBoardId] = useState(null);

//   useEffect(() => {
//     fetch(" https://trelly.it-incubator.app/api/1.0/boards/tasks", {
//       headers: {
//         "api-key": "8fcd8a4a-590d-4639-b949-37df12adb9d5",
//       },
//     })
//       .then((res) => res.json())
//       .then((json) => setTasks(json.data));
//   }, []);

//   useEffect(() => {
//     if(!selectedId) return;

//     fetch(" https://trelly.it-incubator.app/api/1.0/boards/" +
//         boardId + "/tasks/" + selectedId,
//       {
//         headers: {
//           "api-key": "8fcd8a4a-590d-4639-b949-37df12adb9d5",
//         },
//       }
//     )
//       .then((res) => res.json())
//       .then((json) => setSelectedTask(json.data));
//   }, [selectedId]);

//   if (tasks == null) {
//     return <h1>Загрузка...</h1>;
//   }

//   if (tasks.length === 0) {
//     return <h1>Задачи отсутствуют</h1>;
//   }

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setSelectedId(null);
//           setSelectedTask(null);
//         }}
//       >
//         Reset selection
//       </button>

//       <div
//         style={{
//           display: "flex",
//           gap: "30px",
//         }}
//       >
//         <div>
//           {tasks.map((task) => {
//             return (
//               <div
//               key={task.id}
//                 style={{
//                   border:
//                     task.id === selectedId
//                       ? "5px solid blue"
//                       : "5px solid black",
//                   backgroundColor: collorTasks[task.attributes.priority],
//                 }}
//                 onClick={() => {
//                   setSelectedId(task.id);
//                   setSelectedTask(undefined);
//                   setBoardId(task.attributes.boardId)
//                 }}
//               >
//                 <p>
//                   <b>Заголовок: </b>
//                   <span
//                     style={{
//                       textDecoration: task.attributes.status
//                         ? "line-through"
//                         : "none",
//                     }}
//                   >
//                     {task.attributes.title}
//                   </span>
//                 </p>
//                 Статус:{" "}
//                 <input type="checkbox" checked={task.attributes.status} />
//                 <p>
//                   <b>Дата создания: </b>
//                   {new Date(task.attributes.addedAt).toLocaleDateString()}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//         <div
//           style={{
//             border: "3px solid black",
//           }}
//         >
//           <h3>Task details</h3>
//           {selectedTask === null ? (
//             "Task is not selected"
//           ) : selectedTask == undefined ? (
//             "Loading..."
//           ) : (
//             <ul>
//               <li>title: {selectedTask.attributes.title}</li>
//               <li>boardTitle: {selectedTask.attributes.boardTitle}</li>
//               <li>description: {selectedTask.attributes.description}</li>
//             </ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
