import React from "react";
import Todo from "./Todo";
const Todolist = (props) => {
    

    const findTaskByID = (id) => {
        //returns task index
        let taskIndex
        for (let i = 0; i < props.tasks.length; i++) {
            if (props.tasks[i].id === id) { taskIndex = i }
        }
        return taskIndex
    }
    const clearCompleted = () => {
        let temp = props.tasks
        for (let i = 0; i < temp.length; i++) {
            if (props.tasks[i].completed === true) {
                console.log(temp[i])
                temp.splice(i, 1)
                i--
            }
        }
        props.setTasks(temp)
        
        props.reRender()
    }

    const renderTodos = () => {
        if (props.current === 'all') {
            return props.tasks.map((task) => (
                <Todo
                    text={task.text}
                    id={task.id}
                    key={task.id}
                    completed={task.completed}
                    mode={props.mode}
                    complete={completeTask}
                    clear={clear}
                />
            ))
        }
        if (props.current === 'active') {
            return props.tasks.map((task) => {
                if (!task.completed) {
                    return (
                        <Todo
                            text={task.text}
                            id={task.id}
                            key={task.id}
                            completed={task.completed}
                            mode={props.mode}
                            complete={completeTask}
                            clear={clear}
                        />
                    )
                }
            return null
            })
        }
        if (props.current === 'completed') {
            return props.tasks.map((task) => {
                if (task.completed) {
                    return (
                        <Todo
                            text={task.text}
                            id={task.id}
                            key={task.id}
                            completed={task.completed}
                            mode={props.mode}
                            complete={completeTask}
                            clear={clear}
                        />
                    )
                }
            return null
            })
        }
    }

    const clear = (id) => {
        const temp = props.tasks
        let taskIndex = findTaskByID(id)
        temp.splice(taskIndex, 1)
        props.setTasks(temp)
        props.reRender()
    }

    const completeTask = (id) => {
        const temp = props.tasks
        let taskIndex = findTaskByID(id)

        temp[taskIndex].completed = !temp[taskIndex].completed
        props.setTasks(temp)
        props.reRender()
    }
    return (
        <div className="todolist-container">
            {renderTodos()}
            <div className={`info ${props.mode}`}>
                <p className="items-left">{`${props.tasks.length} items left`}</p>
                <p onClick={() => clearCompleted()} className="clear">Clear completed</p>
            </div>
            <div className={`info current ${props.mode}`}>
                <p
                    onClick = {()=>props.setCurrent('all')}
                    style={props.current === 'all' ? { color: 'hsl(220, 98%, 61%)'} : {}}>All</p>
                <p
                    onClick = {()=>props.setCurrent('active')}
                    style={props.current === 'active' ? { color: 'hsl(220, 98%, 61%)' } : {}}>Active</p>
                <p
                    onClick = {()=>props.setCurrent('completed')}
                    style={props.current === 'completed' ? { color: 'hsl(220, 98%, 61%)' } : {}}>Completed</p>
            </div>
        </div>
    )
}

export default Todolist;