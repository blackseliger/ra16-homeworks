import React, { useState } from 'react'
import PropTypes from 'prop-types'
import IconSwitch from './IconSwitch'
function Store({products}) {

    const icon = ["view_list", "view_module"]

    const [iconName, setIcon] = useState(icon[0])

    const onSwitch = evt => {
        setIcon(iconName === icon[0] ? icon[1] : icon[0])
    }

    return (
        <div>
            <IconSwitch icon={iconName} onSwitch={onSwitch}></IconSwitch> 
            {
                iconName === icon[0] ?
                    <ListView  products={products}></ListView > :  <CardsView products={products}></CardsView>
            }

        </div>
    )
}

Store.propTypes = {

}

export default Store

