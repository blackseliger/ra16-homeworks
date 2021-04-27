import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { removeServiceRequest, fetchServices, removeService } from '../actions/actionCreators';

function ServiceList({match, history}) {
  const {items, loading, error} = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchServices(dispatch);
  }, [dispatch])


 
  const handleRemove = id => {
    // dispatch(removeServiceRequest(id));
    removeService(dispatch, id)
  }

  const handleEdit = id => {
    history.push(`${match.url}/${id}`)
  }


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong try again</p>;
  }

  return (
    <ul>
      {items.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleRemove(o.id)}>✕</button>
          <button onClick={() => handleEdit(o.id)}>I</button>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList
