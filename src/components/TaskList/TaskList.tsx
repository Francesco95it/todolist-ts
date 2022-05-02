import React from 'react'
import { Task } from '../../model/Task'
import TaskItem from '../TaskItem/TaskItem'
import './TaskList.scss'

type Props = {
    tasks: Task[]
}

const TaskList = ({tasks}: Props) => {

    return (
        <section className='tasklist'>
            {tasks.map(task => <TaskItem key={task.id} task={task} />)}
        </section>
    )
}

export default TaskList