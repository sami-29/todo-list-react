import React, { useState} from "react";
import Toggle from "./Toggle";
import Create from "./Create";
import Todolist from "./Todolist";

const Main = () => {
    const [mode, setMode] = useState('dark')
    const [tasks, setTasks] = useState([['running 5 miles','completed']])

    const switchMode = ()=> {
        setMode(mode === 'light'? 'dark' : 'light')
    }
    const createTask = (task) => {
        const temp = tasks
        temp.push(task)
        setTasks(temp)
        console.log(tasks)
    }

    const clearCompleted = () => {
        for (let i = 0; i < tasks.length;i++) {
            if (tasks[i][1] === 'completed') {
                const temp = tasks
                console.log(temp[i])
                temp.splice(i, 1)
                console.log(temp)
                setTasks(temp)
            }
        }
    }

    const completeTask = (i) => {
        const temp = tasks
        temp[i][1] = 'completed'
        setTasks(temp)
    }
    return (
        <div className={`app-container ${mode}`}>
            <div className={`background ${mode}`}>
                <h1>TODO</h1>
                <Toggle
                    mode={mode}
                    switch={switchMode}
                />
            </div>

            <div className="todo-app-container">
                <Create
                    mode={mode}
                    create = {createTask}
                />
                <Todolist
                    mode = {mode}
                    tasks={tasks}
                    nbrTasks={tasks.length}
                    clear={clearCompleted}
                    complete = {completeTask}
                />
            </div>

        </div>
    )
}

export default Main;