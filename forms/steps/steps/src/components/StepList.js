import React from 'react'
import PropTypes from 'prop-types'

function StepList({steps, onRemove}) {

    const handleDelete = evtId => {
        onRemove(evtId)
    }

    return (
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
                    <button onClick={() => handleDelete(step.id)}>Delete</button>
                    <button>Edit</button>
                </li>)}
            </ul>
        </div>
    </div>
    )
}

StepList.propTypes = {

}

export default StepList

