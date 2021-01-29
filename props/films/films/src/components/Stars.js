import React from 'react'
import PropTypes from 'prop-types'
import Star from './Star'

function Stars({count}) {
    return (
        <div className="image-area">
        <div className="img-wrapper">
          <img src="https://raw.githubusercontent.com/blackseliger/ra16-homeworks/master/props/films/films/src/infinityTrain.jpg" alt=" Kimetsu no Yaiba: Mugen Ressha-Hen (2020)"/>
                <div className="stars">
                    <ul className="card-body-stars u-clearfix">
                            {(count < 1 || count > 5 || isNaN(count)) ? null : [...Array(count)].map((e, i) => <li key={i}><Star></Star></li>)}
                    </ul>  
                </div>
        </div>
    </div>
    )
}

Stars.defaultProps = {
    count: 0,
}

export default Stars

