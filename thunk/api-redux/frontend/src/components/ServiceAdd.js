import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService, fetchServices } from '../actions/actionCreators';

function ServiceAdd({match, history}) {
  const {item, loading, error} = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();
  
  const id = match.params.id;

  useEffect(() => {
    fetchServices(dispatch, id)
  }, [id])

  const handleChange = evt => {
    const {name, value} = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addService(dispatch, id, item.name, item.price, item.content);
  }


  return (
    <form onSubmit={handleSubmit} id={item.id}>
      <label htmlFor='name'>Название</label>
      <input name='name' onChange={handleChange} value={item.name} />
      <label htmlFor='price'>Стоимость</label>
      <input name='price' onChange={handleChange} value={item.price} />
      <input name='content' onChange={handleChange} value={item.content}></input>
      <button type='submit' disabled={loading}>Save</button>
      {error && <p>Something went wrong try again</p>}
    </form>
  );
}

export default ServiceAdd;
