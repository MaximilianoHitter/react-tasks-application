import TaskList from "./componentes/TaskList";
import TaskForm from "./componentes/TaskForm";
import { TaskContextProvider } from "./context/TaskContext";

function App() {
  return (
    <div className="bg-zinc-700 h-screen">
      <div className="container mx-auto p-10">
        <TaskContextProvider>
          <TaskForm />
          <TaskList />
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;
