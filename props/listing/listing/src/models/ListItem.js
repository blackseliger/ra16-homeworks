import React from 'react'
import PropTypes from 'prop-types'

function ListItem({elementItem}) {
    const {url, title} = elementItem
    return (
        <div className="item">
            <div className='item-image'>
                <a href={url}>
                {/* <img src={MainImage && MainImage.url_570xN} alt=''/> */}
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{title}</p>
                {/* <p className="item-price">{item.currency_code}{item.price}</p> */}
                <p className="item-quantity level-medium">10</p>
            </div>
        </div>
    )
}

ListItem.propTypes = {

}

export default ListItem

