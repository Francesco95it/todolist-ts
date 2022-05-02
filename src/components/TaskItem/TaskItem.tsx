import React from 'react';
import { Task } from '../../model/Task';
import "./TaskItem.scss"

type Props = {
    task: Task
}

const TaskItem = ({ task }: Props) => {
    return (
        <div className={`task ${task.completed ? 'task__completed' : ''}`}>
            <h5>{task.title}</h5>
            <i className="checkmark"></i>
        </div>
    );
}

export default TaskItem