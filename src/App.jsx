import { useState, useEffect } from "react"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { ListTask } from "./components/ListTask"

function App() {

  const [listTasks, setListTasks] = useState([]);
  const [task, setTask] = useState({});

  useEffect(() => {
    const getTaskLocalStorage = () => {

      const listTask = JSON.parse(localStorage.getItem('listTasks')) ?? [];

      if (listTask.length > 0) {
        setListTasks(listTask);
      }
    }
    getTaskLocalStorage();
  }, [])

  useEffect(() => {
    localStorage.setItem('listTasks', JSON.stringify(listTasks))
  }, [listTasks])

  const deleteTask = (key) => {
    const newListTasks = listTasks.filter(task => task.key !== key);
    setListTasks(newListTasks);


  }

  return (
    <>
      <div className="container mx-auto mt-20">
        <Header />
        <div className="mt-12 md:flex">
          <Form
            task={task}
            setTask={setTask}
            listTasks={listTasks}
            setListTasks={setListTasks} />
          <ListTask
            listTask={listTasks}
            setTask={setTask}
            deleteTask={deleteTask}

          />
        </div>
      </div>


    </>
  )
}

export default App
