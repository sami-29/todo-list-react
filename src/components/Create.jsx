import React from "react";

const Create = (props) => {
    let value
    const handleChange = (event) => {
        value = event.target.value
    }

    const onTrigger = (event) => {
        if (value === ''){return}
        props.create([event.target.input.value,'active'])
        event.preventDefault()
        value = ''
    }
    return (
        <div className={`create task ${props.mode}`}>
            <div className={`circle create-circle ${props.mode}`}></div>
            <form autoComplete='off' onSubmit={onTrigger}>
                <input
                name="input"
                placeholder="Create a Todo..."
                type='text'
                value = {value}
                onChange= {handleChange}
                />
            </form>
        </div>
    )
}

export default Create;