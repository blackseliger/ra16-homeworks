import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeService, editService, changeServiceField} from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const { filter } = useSelector(state => state.serviceFilter);
  const filteritems = filter && filter !== '' ? 
    items.filter((item) => item.name.toLowerCase().indexOf(filter) >= 0
    || String(item.price).indexOf(filter) >= 0) : items;
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeService(id));
  }

  const handleEdit = (item) => {
    const { id, name, price } = item;
    dispatch(changeServiceField('name', String(name)));
    dispatch(changeServiceField('price', String(price)));
    dispatch(editService(id));
  }

  return (
    <ul>
      {filteritems.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleRemove(o.id)}>✕</button>
          <button onClick={() => handleEdit(o)}>I</button>
        </li>
      ))}
    </ul>
  )
}

export default ServiceList