import React from "react";

const Create = (props) => {
    const handleChange = (event) => {
         props.setText(event.target.value)
    }

    const onTrigger = (event) => {
        event.preventDefault()
        if (props.value === '') { return }
        props.create({
            text: event.target.input.value,
            completed: false,
            id : props.id
        })
        props.setText('')
    }
    return (
        <div className={`create task-template ${props.mode}`}>
            <div className={`circle plain-circle ${props.mode}`}></div>
            <form autoComplete='off' onSubmit={onTrigger}>
                <input
                name="input"
                placeholder="Create a Todo..."
                type='text'
                value = {props.value}
                onChange= {handleChange}
                />
            </form>
        </div>
    )
}

export default Create;