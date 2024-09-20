import { useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
    id: 1,
    title: "Estudar programação",
    description: "Estudar programação para se tornar um desenvolvedor full stack.",
    isCompleted: false
  },
  {
    id: 2,
    title: "Estudar React",
    description: "Estudar programação para se tornar um desenvolvedor full stack.",
    isCompleted: false
  },
  {
    id: 3,
    title: "Estudar JavaScript",
    description: "Estudar programação para se tornar um desenvolvedor full stack.",
    isCompleted: false
  },
])

function onTaskClick() {
  const newTasks = taks.map((task) => {
    // Atualizar tarefa
    if (task.id == taskId) {
      return { ...task, isCompleted: !task.isCompleted };
    }

    // Não atualizar tarefa
    return task;
  });
  setTasks(newTasks);
}



  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
      <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
      <Tasks tasks={tasks}/>
      <AddTasks />

      </div>
    </div>
  );
}

export default App;
