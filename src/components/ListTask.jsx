import { useEffect } from "react"
import { Task } from "./Task"

export const ListTask = ({ listTask, setTask, deleteTask }) => {

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10 md:h-screen overflow-scroll">
            {listTask && listTask.length ? (
                <>
                    <h1 className="font-black text-3xl text-center mb-10">Lista de Tareas</h1>
                    {listTask.map((task) => {
                        return (
                            <Task
                                key={task.key}
                                task={task}
                                setTask={setTask}
                                deleteTask={deleteTask}
                            />)
                    })}
                </>
            ) : (
                <h1 className="font-black text-3xl text-center mb-10">
                    Sin tareas pendientes...
                </h1>
            )}

        </div>
    )
}