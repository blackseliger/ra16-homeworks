import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';


// const { REACT_APP_API_URL } = process.env
// const url = window.location.pathname;

function App() {
  return (
    <div className='App'>
      <Router> 
         <Switch>
          <Route  exact path='/services'  component={ServiceList} />
          <Route  exact path='/services/:id([0-9]+)?'  component={ServiceAdd} />
          <Redirect exact from='/' to='/services'></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
