import React from 'react';
import PropTypes from 'prop-types';
import ItemModel from '../models/ItemSample';

class ShopItemFunc extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { item } = this.props;

        return (
          <div className="main-content">
              <h2>{item.brand}</h2>
              <h1>{item.title}</h1>
              <h3>{item.description}</h3>
              <div className='description'>
                  {item.descriptionFull}
              </div>
              <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
              <div className="diliver"></div>
              <div className="purchase-info">
                  <div className="price">{item.price}{item.currency}</div>
                  <button>Add to shopping cart</button>
              </div>
          </div>
        );
    }
}

ShopItemFunc.propTypes = {
    item: PropTypes.instanceOf(ItemModel).isRequired
}

export default ShopItemFunc;