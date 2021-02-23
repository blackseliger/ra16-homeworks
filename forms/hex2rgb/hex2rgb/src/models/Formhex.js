import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Formhex(props) {

    const [filterColor, setfilterColor] = useState('')
    const [rgbColor, setRgbColor] = useState()

    function hex2rgb(c) {
        // let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
        // console.log(result);
        // return result ? {
        //     b: parseInt(result[1], 16),
        //     g: parseInt(result[2], 16),
        //     r: parseInt(result[3], 16)
        // } : `Ошибка!`;
    // }


        var bigint = parseInt(c.split('#')[1], 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;

        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }

    const handleSubmit = evt => {
        console.log(evt.target.value)
        setfilterColor(prevFilterColor => (prevFilterColor = evt.target.value));
        // setfilterColor(evt.target.value.length < 8
        //      ? (prevFilterColor => (prevFilterColor = evt.target.value))
        //      : null);
        console.log(filterColor);
        setRgbColor( filterColor !== null 
            ? (prevRgbColor => (prevRgbColor = hex2rgb(filterColor)))
            : `Ошибка!`);
    }

    return (
        <div className='APP-filter-block' style={rgbColor === 'Ошибка!' ? {backgroundColor: 'brown'} : {backgroundColor: rgbColor}}>
        <input id="APP-filter-color" value={filterColor} onChange={handleSubmit}/>
        <span className='APP-rgb-answer' value={rgbColor}>{rgbColor}</span>
        </div> 
    )

}

Formhex.propTypes = {

}

export default Formhex

// Здравствуйте! Подскажите пожалуйста, как сделать чтоб функция срабатывала сразу? переход от одного цвета к другому. 
// на данным момент мне нужно лишний раз нажать на пробел или удалить знак, чтоб сработало прошлое(!) действите, а не актуальное