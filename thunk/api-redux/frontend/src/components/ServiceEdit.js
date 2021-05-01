import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeService, changeServiceField, fetchServices } from '../actions/actionCreators';


export function ServiceEdit({match, history}) {
    const {item, loading, error} = useSelector(state => state.serviceChange);
    const dispatch = useDispatch();
    const {firstLoad, setFirstLoad} = useState(true);

    // console.log(match.params.id);
    console.log(item);

    

    useEffect(() => {
      if (!firstLoad && loading ) {
        history.goBack()
      };
      if (firstLoad) {
        setFirstLoad(false);
        fetchServices(dispatch, match.params.id)
      }
      // fetchServices(dispatch, match.params.id)
      }, [dispatch, loading])

    const handleChange = evt => {
        const {name, value} = evt.target; 
        dispatch(changeServiceField(name, value)) // input 
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        changeService(dispatch, match.params.id, item.name, item.price, item.content)
    }

    return (
      <React.Fragment>
      <form onSubmit={handleSubmit} disabled={loading} className="change-form">
        <label>Название</label>
        <input name='name' onChange={handleChange} value={item.name} />
        <label>Стоимость</label>
        <input name='price' onChange={handleChange} value={item.price} />
        <label>Описание</label>
        <input name='content' onChange={handleChange} value={item.content} />
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