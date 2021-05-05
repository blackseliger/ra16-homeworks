import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeService, changeServiceField, fetchServices } from '../actions/actionCreators';


export function ServiceEdit({match, history}) {
    const {item, loadingChange, errorChange} = useSelector(state => state.serviceChange);
    const { loading, error } = useSelector(state => state.serviceList)
    const [firstLoad, setfirstLoad] = useState(true)
    const dispatch = useDispatch();

    
    useEffect(() => {
      console.log(firstLoad)
      if (!firstLoad && !loadingChange ) {
        console.log(`false first load`)
        history.goBack()
      }
      if (firstLoad) {
        setfirstLoad(false);
        fetchServices(dispatch, match.params.id)
      }
      // fetchServices(dispatch, match.params.id)
      }, [dispatch, loadingChange])

    const handleChange = evt => {
        const {name, value} = evt.target; 
        dispatch(changeServiceField(name, value)) // input 
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        changeService(dispatch, match.params.id, item.name, item.price, item.content)
    }

    
    const handleCancel = () => {
      history.goBack();
    };
  
  
    const handleBack = () => {
      history.goBack();
    };
  
    if (loading) {
      return <div className='loading'></div>
    }
  
    if (error) {
      return (
        <div>
          <div className="error-msg">Произошла ошибка!</div>
          <div onClick={handleBack}>Назад</div>
        </div>
      );
    }





    return (
      <React.Fragment>
        fksghkjfsjfhskh
      <form onSubmit={handleSubmit} disabled={loadingChange} className="change-form">
        <label>Название</label>
        <input name='name' onChange={handleChange} value={item.name} />
        <label>Стоимость</label>
        <input name='price' onChange={handleChange} value={item.price} />
        <label>Описание</label>
        <input name='content' onChange={handleChange} value={item.content} />
        <div className="buttons">
          <button type='button'onClick={handleCancel}>Отмена</button>
          {!loadingChange &&  <button type='submit'>Сохранить</button>}
        </div>
      </form>
      {loadingChange && <div className='loading'></div>}
      {errorChange && <p>{errorChange.message}</p>}
    </React.Fragment>
    )

}