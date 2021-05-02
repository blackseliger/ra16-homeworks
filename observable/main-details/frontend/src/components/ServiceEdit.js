import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { changeService, changeServiceField, fetchServices } from '../actions/actionCreators';
import { changeServiceField, fetchServicesRequest } from '../actions/actionCreators'


export function ServiceEdit({match, history}) {
    const {items, loading, error} = useSelector(state => state.serviceList);
    const dispatch = useDispatch();
    // const {firstLoad, setFirstLoad} = useState(true);

    // console.log(match.params.id);
    console.log(items);

    
    

    useEffect(() => {
      fetchServicesRequest(dispatch, match.params.id)
      }, [dispatch, match.params.id])

    const handleChange = evt => {
        const {name, value} = evt.target; 
        dispatch(changeServiceField(name, value)) // input 
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        // changeService(dispatch, match.params.id, item.name, item.price, item.content)
    }

    const handleRefresh = () => {
      dispatch(fetchServicesRequest(match.params.id));
    };
  
    if (loading) {
      return <div className='loading'></div>
    }
  
    if (error) {
      return (
        <div className="error-fetch">
          <div className="error-mes">Произошла ошибка!</div>
          <div className="error-refresh" onClick={handleRefresh}>Повторить запрос</div>
        </div>
      );
    }



    return (
      <React.Fragment>
      <form onSubmit={handleSubmit} disabled={loading} className="change-form">
        <label>Название</label>
        <input name='name' onChange={handleChange} value={items.name} />
        <label>Стоимость</label>
        <input name='price' onChange={handleChange} value={items.price} />
        <label>Описание</label>
        <input name='content' onChange={handleChange} value={items.content} />
        <div className="buttons">
          {/* <button type='button'onClick={handleCancel}>Отмена</button> */}
        <button type='submit'>Сохранить</button>
        </div>
      </form>
      {loading && <div className='loading'></div>}
      {error && <p>{error.message}</p>}
    </React.Fragment>
    )

}