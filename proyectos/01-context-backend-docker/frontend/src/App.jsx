import TaskForm from './components/taskForm'
import TaskList from './components/TaskList'

const App = () => {
  return (
    <div className='m-5 text-xl text-blue-800'>
      <h1 className='text-xl font-bold  text-center mb-8'>Gestor de Tareas con contextos</h1>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default App