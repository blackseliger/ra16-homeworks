import React from 'react'
import PropTypes from 'prop-types'

function InputDate({onChange, value}) {

    const handleChange = evt => {  
        onChange(evt.target);
    }

    return (
        <div>
            <label htmlFor='date-input'>Дата (ДД.ММ.ГГ)</label>
            <input type='date' id='date' name='date' value={value.date} onChange={handleChange} required ></input>
        </div>
    )
}

InputDate.propTypes = {

}

export default InputDate

