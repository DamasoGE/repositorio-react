//import 

import { createContext, useEffect, useState } from "react";

// crear el contexto (se suele usar un solo archivo para exportar todos los contextos y los providers uno a uno)

export const TaskContext = createContext();

// crear el provider del contexto

export const TaskProvider = ({ children }) =>{ //destructuring de las props
    /**
     * task = {
     * id:1,
     * title: 'Tarea1'
     * completed: false
     * }
     */

    const [tasks, setTasks] = useState(
        ()=>{
            const savedTasks = localStorage.getItem("tasks")
            return savedTasks ? JSON.parse(savedTasks):[];
        }
    );

    useEffect(() => {
      //guardar en el localstorage
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    const addTask = (task) =>{
        setTasks((prevTasks) => [...prevTasks, task])
    }

    const deleteTask = (taskId) =>{
        setTasks((prevTasks)=> prevTasks.filter((task)=> task.id!=taskId));
    }

    const toggleTaskCompletion = (taskId) =>{
        setTasks((prevTasks)=>{
            return prevTasks.map((task)=>{
                return task.id==taskId ? { ...task, completed: !task.completed} : task;
            })
        })
    }
    

    //ACCIONES que puedo realizar con las tareas
    // crear tarea
    // eliminar tarea
    // completar tarea
    // editar tarea




    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTaskCompletion }}>
            { children }
        </TaskContext.Provider>
    );
}