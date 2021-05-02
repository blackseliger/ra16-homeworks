import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchServicesRequest } from '../actions/actionCreators';

function ServiceList({match, history}) {
  const {items, loading, error} = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServicesRequest());
  }, [dispatch])

  console.log(items);

  const handleRefresh = () => {
    dispatch(fetchServicesRequest());
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


  // Здравствуйте! Прошу прощенья что пишу это не комментариях на сайте,
  // но встал на проблеме когда скинул задание,
  // т.к. был уверен что проблем не должно быть 
  // Не могу разобраться почему items приходит пустой, вся логика происходит в 
  // epics/index.js
  // 
  // Скажите пожалуйста в чем я ошибся.....
  // Спасибо! :( 
  return (
    <ul>
      {items && items.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <Link to={`${match.url}/${o.id}`}>Подробности</Link>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList
