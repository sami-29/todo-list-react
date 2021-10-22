import React from "react";

const Todolist = (props) => {
    let tasks = []
    let nbrTask = 0
    props.tasks.forEach(task => {
        tasks.push(

            <div className={`task ${props.mode}`}>
                <div onClick={props.complete(nbrTask)} className={`circle ${props.mode}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
                </div>
                    <p>{task[0]}</p>
            </div>)
        nbrTask++
    })
    return (
        <div className="todolist-container">
            {tasks}
            <div className={`info ${props.mode}`}>
                <p className="items-left">{`${props.nbrTasks} items left`}</p>
                <p onClick={props.clear} className="clear">Clear completed</p>
            </div>
        </div>
    )
}

export default Todolist;