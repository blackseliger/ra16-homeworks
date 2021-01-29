import React from 'react'
import PropTypes from 'prop-types'
import Star from './Star'

function Stars({count}) {
    return (
        <div class="image-area">
        <div class="img-wrapper">
          <img src="https://github.com/blackseliger/ra16-homeworks/blob/master/props/films/films/src/infinityTrain.jpg" alt=" Kimetsu no Yaiba: Mugen Ressha-Hen (2020)"/>
                <div className="stars">
                    <ul className="card-body-stars u-clearfix">
                            {(count < 1 || count > 5 || isNaN(count)) ? null : [...Array(count)].map((e, i) => <li><Star></Star></li>)}
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

