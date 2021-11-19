import React, {useState} from "react";
import Toggle from "./Toggle";
import Create from "./Create";
import Todolist from "./Todolist";

const Main = () => {
    const [text, setText] = useState('')
    const [mode, setMode] = useState('dark')
    const [tasks, setTasks] = useState([])
    const [state, setState ] = useState(false)
    const [current, setCurrent] = useState('all')

    const [idCounter, setIdCounter] = useState(0)


    const reRender = () => {
        setState(state ? false : true)
    }

    const switchMode = ()=> {
        setMode(mode === 'light'? 'dark' : 'light')
    }
    const createTask = (task) => {
        setTasks(
            [
                ...tasks,
                task
            ]
        )
        setIdCounter(idCounter + 1)
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
                    create={createTask}
                    value={text}
                    setText={setText}
                    id={idCounter}
                />
                <Todolist
                    mode = {mode}
                    tasks={tasks}
                    setTasks={setTasks}
                    setCurrent={setCurrent}
                    current = {current}
                    reRender = {reRender}
                />
            </div>

        </div>
    )
}

export default Main;

