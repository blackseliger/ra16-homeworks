import React, { useState, useEffect } from 'react';
import './App.css';
import ProfileList from './components/ProfileList';
import ProviderPostContext from './hooks/ProviderPostContext';



function App() {

  return (
    <ProviderPostContext>
    <div className="App">
      <ProfileList />
    </div>
    </ProviderPostContext>
  );
}

export default App;
