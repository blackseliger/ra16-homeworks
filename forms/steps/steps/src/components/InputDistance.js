import React from 'react'
import PropTypes from 'prop-types'

function InputDistance({onChange, value}) {

    const handleChange = evt => {
        onChange(evt.target);
    }

    return (
        <div>
            <label htmlFor='distance'>Дистанция км</label>
            <input type='number'id='distance' name='distance' value={value.distance} onChange={handleChange} required></input>
        </div>
    )
}

InputDistance.propTypes = {

}

export default InputDistance

