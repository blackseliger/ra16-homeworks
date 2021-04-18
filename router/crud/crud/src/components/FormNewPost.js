import React from 'react'

function FormNewPost(props) {

    const {info, onSubmit } = props;

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSubmit();
    }

    const handleChange = (evt) => {
        const { value } = evt.target;
        props.onChange(value);
    }
    

    return (
       <form className='add-form' onSubmit={handleSubmit}>
           <div>
               <label htmlFor={info.name}>{info.label}</label>
               <input id={info.name} name={info.name} value={info.value} onChange={handleChange}></input>
           </div>
           <button type='submit'>Publish</button>
       </form>
    )
}

export default FormNewPost
