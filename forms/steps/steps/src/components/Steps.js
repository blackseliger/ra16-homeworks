import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import StepModel from '../models/StepModel';




//  Нужно декомпозировать!!!!!! 


// Здравствуйте! Основную логику задания сделал, пожалуйста не принимайте задание, т.к. его еще не декомпозировал на "глупые" компоненты. Мне важен ваш комментарий после
// завершения задания. Спасибо!!
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

        const equalStep = steps.findIndex(prevStep => Date.parse(prevStep.name) === Date.parse(step.name))
        console.log(equalStep)
        equalStep >= 0 ? 
                steps[equalStep].distance += step.distance : 
                setStep(prevSteps => [...prevSteps, step]);

        setStep(prevSteps => prevSteps.sort((a, b) => {
            if (Date.parse(a.name) > Date.parse(b.name)) {
                return -1;
            }
            }))
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
                            <span>{step.name}</span>
                            
                            <span>{step.distance}</span>
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
