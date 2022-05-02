import React, { useState } from 'react'
import './AddTask.scss'

type Props = {
    addTaskCb: (task: string) => void
}

const AddTaskModal = ({ addTaskCb }: Props) => {
    const [title, setTitle] = useState('');

    return (
        <div className="addtask-modal">
            <label>Task Title</label>
            <input name="title" type="text" 
                value={title} onChange={(e) => setTitle(e.target.value)} />
            <button onClick={() => {addTaskCb(title)}}>Submit</button>
        </div>
    )
}


const AddTask = ({ addTaskCb }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
    <div className="addtask">
        {
            isModalOpen ?
            <AddTaskModal addTaskCb={addTaskCb} /> :
            <button className="addtask-plus" onClick={() => setIsModalOpen(true)}>+</button>
        }
    </div>
    )
}

export default AddTask