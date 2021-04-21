import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService, editService } from '../actions/actionCreators';

function ServiceAdd() {
    const item = useSelector(state => state.serviceAdd);
    const { editID } = useSelector(state => state.serviceEdit)
    const dispatch = useDispatch()

    const handleChange = evt => {
        const { name, value } = evt.target;
        dispatch(changeServiceField(name, value))
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch(addService(editID , item.name, item.price))
    }

    const handleRemove = evt => {
        if (editID) {
            dispatch(editService(null));
        }
        dispatch(changeServiceField('name', ''));
        dispatch(changeServiceField('price', ''));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name='name' onChange={handleChange} value={item.name}/>
            <input name='price' onChange={handleChange} value={item.price}/>
            <button type='submit'>Save</button>
            {editID && <button onClick={handleRemove}>Cancel</button>}
        </form>
    )
}

export default ServiceAdd;