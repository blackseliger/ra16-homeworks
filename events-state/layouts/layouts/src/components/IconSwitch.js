import React from 'react'
import PropTypes from 'prop-types'

function IconSwitch({icon, onSwitch}) {
    return (
        <div>
            <i className={`switchCards`} onClick={onSwitch}>{icon}</i>
        </div>
    )
}

IconSwitch.propTypes = {

}

export default IconSwitch

