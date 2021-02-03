import React from 'react'

function SampleCard({sample}) {
    return (
    <div class="product-item">
  <img src={sample.img} alt='#'/>
  <div className="product-list">
    <h3>{sample.name}</h3>
      <span className="price">{sample.price}</span>
      <span className="color">{sample.color}</span>
      <a href="#" className="button">В корзину</a>
  </div>
</div>
    )
}

export default SampleCard
