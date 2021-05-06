import React from 'react';
import PropTypes from 'prop-types';
import SampleCard from './SampleCard';

function ListView({products, icon}) {
    
    return (
        <div className={icon}>
        {products.map((card) => <SampleCard sample={card} key={card.name}></SampleCard>)}
    </div>
    )
}

ListView.propTypes = {

}

export default ListView

