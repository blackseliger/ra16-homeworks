import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterSerivce } from '../actions/actionCreators';

 function ServiceFilter() {
    const filter = useSelector(state => state.filterSerivce);
    const disptach = useDispatch();


    const handleChange = (evt) => disptach(filterSerivce(evt.target.value));
    
    return (
        <input name='filter' onChange={handleChange} value={filter} placeholder={'Filter...'}/>
    )
}

export default ServiceFilter