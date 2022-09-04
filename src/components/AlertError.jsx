import WarningImage from '../assets/warning.png'

export const AlertError = ({ message }) => {

    return (
        <div
            role="alert"
            className="bg-red-200 border-t-4 border-red-800 rounded-b text-red-800 px-4 py-3 shadow-md mb-3">
            <div className="flex">
                <div className="py-1 mr-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                </div>
                <div>
                    <p className="font-bold">Información Incompleta</p>
                    <p className="text-sm">{message}</p>
                </div>
            </div>
        </div>
    )
}