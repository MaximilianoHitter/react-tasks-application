import { createContext, useState, useEffect } from "react";


export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  
  function setearLocal(tasks){
    localStorage.setItem('tareas_local', JSON.stringify(tasks));
  }
  
  function createTask(task) {
    setTasks(()=>{
      let newTasks = [...tasks, task];
      setearLocal(newTasks);
      return newTasks;
    });
    
  }
  
  function eliminarTask(id) {
    setTasks(()=>{
      let newTasks = tasks.filter((t) => t.id !== id);
      setearLocal(newTasks);
      return newTasks;
    });
    
  }

  useEffect(() => {
    if(localStorage.getItem('tareas_local')){
      setTasks(JSON.parse(localStorage.getItem('tareas_local')));
    }else{
      setTasks([]);
    }
  }, []);
  return (
    <TaskContext.Provider value={{tasks, eliminarTask, createTask}}>
      {props.children}
    </TaskContext.Provider>
  );
}




