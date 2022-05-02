import React, { useState } from 'react';
import AddTask from './components/AddTask/AddTask';
import Navbar from './components/Navbar/Navbar';
import TaskList from './components/TaskList/TaskList';
import { Task } from './model/Task';
import exampleTasks from './tasksexample'

function App() {

  const [tasks, setTasks] = useState<Task[]>(exampleTasks);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: tasks.length > 0 ? (tasks[tasks.length - 1].id + 1) : 1,
      title: title,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  return (
    <>
      <Navbar text="All tasks" />
      <TaskList tasks={tasks} />
      <AddTask addTaskCb={addTask}/>
    </>
  );
}

export default App;
