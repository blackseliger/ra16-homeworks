import React from 'react'
import InputForm from './InputForm'


function AddForm(props) {

    const handleSubmit = evt => {
        props.handleSubmit(evt)
    }

    const handleChange = evt => {
        props.handleChange(evt)
    }


    return (
        <form onSubmit={handleSubmit}>
            <InputForm content={props.content} handleChange={handleChange}></InputForm>
        </form>
    )
}

export default AddForm
