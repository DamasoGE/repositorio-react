import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

const TaskList = () => {
    const { tasks, deleteTask, toggleTaskCompletion } = useContext(TaskContext)

    return (
    <div className="p-4 mt-10 bg-gray-300 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Lista de tareas</h2>
        { tasks.length === 0 && <span>No hay tareas</span>}

        <ul>
            { tasks.map((task)=>{
                return (
                    <li 
                        key={task.id}
                        className="flex justify-between items-center p-2 mb-2 bg-white rounded-md shadow-md"
                    >
                    <span className={`flex-1 ${task.completed ? "line-through text-gray-600":""}`}>{task.title}</span>
                    <button onClick={()=>toggleTaskCompletion(task.id)} className="px-4 py-1 bg-blue-500 text-white rounded-md m-2">Completar</button>
                    <button onClick={()=>deleteTask(task.id)} className="px-4 py-1 bg-red-500 text-white rounded-md m-2">Eliminar</button>
                    </li>
                )
            })}
        </ul>
    </div>
    )
}

export default TaskList