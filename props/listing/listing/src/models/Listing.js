import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

function Listing(props) {
    const { items } = props
    return (
        <div className="item-list">
            {items.map(item => <ListItem key={item.listing_id} elementItem={item}/>)}
        </div>
    )
}

Listing.propTypes = {

}

export default Listing

