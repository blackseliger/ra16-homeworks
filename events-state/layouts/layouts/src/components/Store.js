import React, { useState } from 'react'
import PropTypes from 'prop-types'
import IconSwitch from './IconSwitch'
import CardsView from './CardsView'
import ListView from './ListView'
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
                    <ListView  products={products} icon={iconName}></ListView > :  <CardsView products={products} icon={iconName}></CardsView>
            }

        </div>
    )
}

Store.propTypes = {

}

export default Store

