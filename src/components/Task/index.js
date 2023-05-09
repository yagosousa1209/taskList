import { AiOutlineCloseCircle } from 'react-icons/ai'

const Task = ({ taskList, deleteTask }) => {
    return (
        <div className='flex'>
            <p className='w-full bg-secundary flex items-center pl-2 rounded-l-lg text-primary font-semibold'>
                {taskList.task}
            </p>
            <div className='flex bg-primary justify-center items-center gap-2 p-2 rounded-r-lg'>
                <AiOutlineCloseCircle size={23}
                    className='cursor-pointer'
                    onClick={() => deleteTask(taskList.id)}
                />
            </div>
        </div>
    )
}

export default Task
