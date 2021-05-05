import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
// import ServiceAdd from './components/ServiceAdd';
import { ServiceEdit } from './components/ServiceEdit';
import ServiceList from './components/ServiceList';




function App() {
  return (
    <div className='App'>
      <Router> 
         <Switch>
          <Route  exact path='/services'  component={ServiceList} />
          <Route  exact path='/services/:id([0-9]+)?'  component={ServiceEdit} />
          <Redirect exact from='/' to='/services'></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
