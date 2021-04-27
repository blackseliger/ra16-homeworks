import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';


// const { REACT_APP_API_URL } = process.env
const url = window.location.pathname;

function App() {
  return (
    <div className='App'>
      <Router> 
         <Switch>
          <Route  path='/services'  component={ServiceList} />
          <Route  path='/services/:id'  component={ServiceAdd} />
        </Switch>
      </Router>
      {/* <ServiceAdd />
      <ServiceList/> */} 
      {/* если раскоментировать, то компоненты будут отображаться */}
    </div>
  );
}

export default App;
