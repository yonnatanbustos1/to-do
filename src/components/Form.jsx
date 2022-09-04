import { useState, useEffect } from "react"
import { AlertError } from "./AlertError";

export const Form = ({ task, setTask, listTasks, setListTasks }) => {

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(task).length > 0) {
            setTitle(task.title);
            setDate(task.date);
            setDescription(task.description);
        }
    }, [task])

    const generateKey = () => {
        return Math.random().toString(20).substr(2);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([title, date, description].includes('')) {
            setError(true)
            return;
        }
        setError(false)

        const newTask = {
            title,
            date,
            description
        }

        if (task.key) {
            newTask.key = task.key
            const listUpdateTasks = listTasks.map(t => t.key === task.key ? newTask : t);

            setListTasks(listUpdateTasks)
            setTask({})
        } else {
            newTask.key = generateKey();
            setListTasks([...listTasks, newTask])
        }

        setTitle("");
        setDate("");
        setDescription("");

    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h1 className="font-black text-3xl text-center mb-10">Creación de Tareas</h1>
            <form
                onSubmit={handleSubmit}
                className="bg-white shoadow-md rounded-md py-10 px-5 mb-10">

                {error && (<AlertError message={'Faltan campos por completar'} />)}
                <div className="mb-5">
                    <label
                        htmlFor="title"
                        className="block text-gray-700 font-bold">
                        Título
                    </label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Título de la tarea"
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="date"
                        className="block text-gray-700 font-bold">
                        Fecha
                    </label>
                    <input
                        id="date"
                        type="date"
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                        value={date}
                        onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="description"
                        className="block text-gray-700 font-bold">
                        Descripción
                    </label>
                    <textarea
                        id="description"
                        type="text"
                        placeholder="Descripción de la tarea"
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </div>

                {task.key ? (
                    <button
                        id="create-task"
                        type="submit"
                        className="bg-green-500 w-full p-3 text-white font-bold rounded-full hover:bg-green-700 transition-colors cursor-pointer" >
                        Actualizar Tarea
                    </button>
                ) : (
                    <button
                        id="create-task"
                        type="submit"
                        className="bg-blue-500 w-full p-3 text-white font-bold rounded-full hover:bg-blue-700 transition-colors cursor-pointer" >
                        Crear Tarea
                    </button>)}
            </form>
        </div>
    )
}