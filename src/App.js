import { useEffect, useState } from "react";
import Form from "./components/Form";
import { v4 as uuidv4 } from 'uuid'
import Task from "./components/Task";
import { Flip, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  //cadastrar tarefa no localStorage
  const [task, setTask] = useState('')
  const [listTasksObject, setListTasksObject] = useState([])

  function register(event) {
    event.preventDefault()

    if (task === '') {
      return toast.warning('Digite sua Tarefa!')
    }

    const obj = [
      ...listTasksObject,
      {
        task: task,
        done: false,
        id: uuidv4(),
      }]

    setListTasksObject(obj)
    localStorage.setItem('@tasks', JSON.stringify(obj))

    setTask('')
    toast.success('Tarefa adicionada!')
  }

  useEffect(() => {
    if (localStorage.getItem('@tasks') !== null) {
      setListTasksObject(JSON.parse(localStorage.getItem('@tasks')))
    }
  }, [])

  //deletar tarefa
  function deleteTask(id) {
    const obj = listTasksObject.filter(task => task.id !== id)
    setListTasksObject(listTasksObject.filter(task => task.id !== id))
    localStorage.setItem('@tasks', JSON.stringify(obj))
    toast.success('Tarefa removida!')
  }

  return (
    <div className="text-letter h-screen flex justify-center items-center bg-backGround_2">
      <ToastContainer
        autoClose={2000}
        position="top-center"
        transition={Flip}
        newestOnTop
        pauseOnFocusLoss={false}
      />
      <div className="flex flex-col justify-between h-5/6 bg-backGround_1 w-1/3 items-center rounded-lg">
        <div className="flex flex-col items-center gap-4 w-full mt-4">
          <h1 className="text-4xl font-bold">Lista de tarefas</h1>
          <Form
            formList={register}
            formOnChange={value => setTask(value)}
            formValue={task}
          />
        </div>
        <div className="flex flex-col gap-2 w-5/6 h-2/3 overflow-auto">
          {listTasksObject.map(
            (taskListMap, indice) =>
              <Task
                key={indice}
                taskList={taskListMap}
                deleteTask={deleteTask}
              />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
