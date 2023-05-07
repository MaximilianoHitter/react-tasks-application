import TaskCard from "./TaskCard"
import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

function TaskList() {
  const {tasks} = useContext(TaskContext)
  
  if(tasks.length === 0){
    return(
      <h1 className="text-center text-white font-bold text-xl">No hay tareas todavía</h1>
    )
  }else{
    return (
      <div key="tasklist" className="flex align-middle justify-center gap-2 grid grid-cols-6">
        {tasks.map(task =>{
          return (
            <TaskCard key={task.id} task={task} />
          )
        })}
      </div>
    )

  }
  

}

export default TaskList
