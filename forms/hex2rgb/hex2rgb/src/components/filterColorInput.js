import React from 'react'
import PropTypes from 'prop-types'

function FilterColorInput(props) {
    const handleFilter = evt => {
        const { value } = evt.target;
        value.length === 7 && props.onFilter(value)
    }
    return (
        <input id="APP-filter-color" value={props.filterColor} onChange={handleFilter}/>
    )
}

FilterColorInput.propTypes = {

}

export default FilterColorInput

