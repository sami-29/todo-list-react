import React from "react";

const Todo = (props) => {
    return (
        <div className={`task-template task ${props.mode}`}>
            <div onClick={() => props.complete(props.id)} className={`${props.completed ? 'circle' : 'circle plain-circle'} ${props.mode}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" /></svg>
            </div>
            <p>{props.text}</p>
            <svg onClick={() => props.clear(props.id)}className ='cross' xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
        </div>
    )
}


export default Todo;