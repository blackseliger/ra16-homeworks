import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import StepModel from '../models/StepModel';
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
        const step = new StepModel(nanoid(), form.date, form.distance);
        setStep(prevSteps => [...prevSteps, step]);
        if (steps.length > 0) {
            console.log(steps)
           
            setStep(prevSteps => prevSteps.sort((a, b) => {
                return Date.parce(b.name) - Date.parce(a.name)
            }))
        }
        setForm({date: '', distance: ''});
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='date-input'>Дата (ДД.ММ.ГГ)</label>
                    <input type='date' id='date' name='date' value={form.date} onChange={handleChange} required></input>
                </div>
                <div>
                    <label htmlFor='distance'>Дистанция км</label>
                    <input type='number'id='distance' name='distance' value={form.distance} onChange={handleChange} required></input>
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
