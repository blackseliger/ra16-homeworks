import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import StepModel from '../models/StepModel';
import InputDate from './InputDate'
import InputDistance from './InputDistance'
import StepList from './StepList'

//  добавить CSS 

function Steps(props) {

    const [ form, setForm ] = useState({ date: '', distance: '' });
    const [ steps, setStep ] = useState([]);

    
    const handleChange = valueArg => {
        const name = valueArg.name;
        const value = valueArg.type === 'date' ? valueArg.value : valueArg.value;
        setForm(prevForm => ({...prevForm, [name]: value}));
      };

      const handleDelete = (id) => {
        setStep(prevStep => prevStep.filter(step => step.id !== id));
    }

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
                <InputDate value={form.date} onChange={handleChange}></InputDate>
                <InputDistance value={form.distance} onChange={handleChange}></InputDistance>
                <button type='submit'>OK</button>
            </form>
            <StepList steps={steps} onRemove={handleDelete}></StepList>
        </div>
    )
}

Steps.propTypes = {

}

export default Steps
