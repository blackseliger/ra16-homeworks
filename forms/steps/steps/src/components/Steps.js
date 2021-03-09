import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Steps(props) {

    const [ form, setForm ] = useState({ date: '', distance: '' });
    const [ steps, setStep ] = useState([]);

    
    const handleChange = ({target}) => {
        const name = target.name;
        const value = target.type === 'date' ? target.value : target.value;
        setForm(prevForm => ({...prevForm, [name]: value}));
      };

    const handleSubmit = evt => {
        evt.preventDefault();
        console.log(evt.type);
        console.dir(evt.target);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='date-input'>Дата (ДД.ММ.ГГ)</label>
                    <input type='date' id='date' name='date' value={form.date} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='distance'>Дистанция км</label>
                    <input id='distance' name='distance' value={form.distance} onChange={handleChange}></input>
                </div>
                <button type='submit'>OK</button>
            </form>
            <div className='steps-list'>
                <div className='header'>
                    <span>Дата</span>
                    <span>Пройдено</span>
                    <span>Действия</span>
                </div>
                <div>
                    <ul>
                        {steps.map(step => <li key={step.id}>
                            {step.name}
                            {step.distance}
                            <button>Delete</button>
                            <button>Edit</button>
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

Steps.propTypes = {

}

export default Steps

