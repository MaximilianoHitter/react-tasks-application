import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskForm() {

    const {createTask, tasks} = useContext(TaskContext)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const capturarTitle = (e)=>{
        setTitle(e.target.value);
    }

    const capturarDescription = (e)=>{
        setDescription(e.target.value);
    }

    const guardarTarea = (e)=>{
        e.preventDefault();
        let id = tasks.length;
        let obj = {
            id: id,
            title: title,
            description: description,
        }
        createTask(obj);
        setTitle('');
        setDescription('');
    }

  return (
    <div className='max-w-md mx-auto'>
        <form action="" className="bg-slate-500 p-10 mb-4 rounded-md" onSubmit={guardarTarea}>
            
            <input type="text" className='bg-slate-300 p-3 w-full mb-2 rounded-md focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-600 ' name='title' placeholder="Escribe tu tarea" 
            onChange={capturarTitle} value={title}/>
            <br/>
            
            <input type="text" className='bg-slate-300 p-3 w-full mb-2 rounded-md focus-within:ring-inherit focus-within:ring-red-500 focus-within:ring-indigo-600 ' name='description' placeholder='Escribe la descripcion'
            onChange={capturarDescription} value={description}/>
            <br />
            <button className='bg-indigo-500 px-3 py-1 text-white'>Guardar</button>
        </form>
    </div>
  )
}

export default TaskForm