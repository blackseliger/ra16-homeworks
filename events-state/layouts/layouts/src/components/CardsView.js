import React from 'react'
import PropTypes from 'prop-types'
import SampleCard from './SampleCard';

function CardsView({products, icon}) {
    const style = {

    }

    return (
        <div className={icon}>
            {products.map((card) => <SampleCard sample={card} key={card.name}></SampleCard>)}
        </div>
    )
}

CardsView.propTypes = {

}

export default CardsView

