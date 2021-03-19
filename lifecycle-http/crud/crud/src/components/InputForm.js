import React from 'react'

function InputForm(props) {

    const handleChange = evt => {
        props.handleChange(evt);
    }

    return (
        <div>
           <label htmlFor='content'>New Note</label>
            <input type='text' name='content' value={props.content} onChange={handleChange}></input>
        </div>
    )
}

export default InputForm
