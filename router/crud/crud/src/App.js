import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import NewPost from './components/NewPost';
import HomePage from './components/HomePage';
import ProviderPostContext from './components/ProviderPostContext';
import PostView from './components/PostView';
import Page404 from './components/Page404';

function App() {
  return (
    <ProviderPostContext>
    <div className="App">
    <Router>
      <Switch>
        <Route path='/posts/new'  component={NewPost} />
        <Route path='/posts/:id([0-9]+)?' component={PostView} />
        <Route exact path='/' component={HomePage} />
        <Route path='*' component={Page404}></Route>
      </Switch>
    </Router>
  </div>
    </ProviderPostContext>

  );
}

export default App;
