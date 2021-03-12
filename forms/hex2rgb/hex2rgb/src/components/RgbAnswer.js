import React from 'react'
import PropTypes from 'prop-types'

function RgbAnswer({rgbColor}) {

    function hex2rgb(c) {
        var bigint = parseInt(c.split('#')[1], 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;

        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }


    const hex = rgbColor && hex2rgb(rgbColor)
    console.log(hex);
    return (
        <span className='APP-rgb-answer'>{hex !== null ? hex : 'Ошибка'}</span>
    )
}

RgbAnswer.propTypes = {

}

export default RgbAnswer

