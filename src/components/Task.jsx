export const Task = ({ task, setTask, deleteTask }) => {

    const { title, date, description, key } = task

    const editTask = () => {
        setTask(task)
    }

    const handleDelete = () => {
        const response = confirm(`¿Desea eliminar la tarea ${title}`);
        if (response) {
            deleteTask(key)
        }
    }

    return (
        <div className="bg-white shadow-md px-5 py-10 rounded-lg mt-5">
            <p className="font-bold mb-3 text-gray-700">
                Título: <span className="font-normal normal-case">{title}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700">
                Fecha: <span className="font-normal normal-case">{date}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700">
                Descripción: <span className="font-normal normal-case">{description}</span>
            </p>
            <div className="flex justify-between">
                <button
                    type="button"
                    className="bg-green-500 hover:bg-green-700 mt-4 py-2 px-10 rounded-full text-white font-bold"
                    onClick={editTask}>
                    Editar
                </button>
                <button
                    type="button"
                    className="bg-red-500 hover:bg-red-700 mt-4 py-2 px-10 rounded-full text-white font-bold"
                    onClick={handleDelete}>
                    Eliminar
                </button>
            </div>
        </div>
    )
}