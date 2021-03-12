import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FilterColorInput from './filterColorInput'
import RgbAnswer from './RgbAnswer'

function Formhex(props) {

    const [filterColor, setfilterColor] = useState('')
    const [rgbColor, setRgbColor] = useState('')


    const handleFilter = value => {
        if (/^#[\da-fA-F]{6}$/.test(value)) setfilterColor(value);
        setRgbColor(value)
    }



    return (
        <div className='APP-filter-block' style={rgbColor === filterColor ? {backgroundColor: rgbColor} : {backgroundColor: '#DC143C'}}>
        <FilterColorInput value={filterColor} onFilter={handleFilter}></FilterColorInput>
        <RgbAnswer rgbColor={rgbColor === filterColor ? rgbColor : null}></RgbAnswer>
        </div> 
    )

}

Formhex.propTypes = {

}

export default Formhex
