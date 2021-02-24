import React from 'react'
import PropTypes from 'prop-types'

function ListItem({elementItem}) {
    const {url, title, MainImage, item, quantity} = elementItem

    function getTitle(title) {
        return title.length > 50 ? title.slice(0, 50) + '…' : title;
      }

    return (
        <div className="item">
            <div className='item-image'>
                <a href={url}>
                <img src={MainImage && MainImage.url_570xN} alt=''/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{title && getTitle(title)}</p>
                <p className="item-price">{item.currency_code}{item.price}</p>
                <p className={`item-quantity level-${quantity && quantity > 20 ? 'high' : quantity > 10 ? 'medium' : 'low'}`}>{`${quantity} left`}</p>
            </div>
        </div>
    )
}

ListItem.propTypes = {

}

export default ListItem

