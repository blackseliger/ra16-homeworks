import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import useUserInfo from './hooks/useUserInfo';
import News from './components/News';

function App() {

  const [token, setToken] = useState({});
  const [user, setUser] = useState({});

  const [{data, loading, error}] = useUserInfo(`${process.env.REACT_APP_AUTH_URL}/private/news`, token);
  if (data && (JSON.stringify(user) !== JSON.stringify(data))) setUser(data);

  const handleSubmit = evt => {
    evt.preventDefault();
    const formData = new FormData(evt.target)
    const fetchData = async () => {
        const responce = await fetch(`${process.env.REACT_APP_AUTH_URL}/auth`, {
          method: 'POST',
          body : formData
        })
        if (!responce.ok) {
          throw new Error(responce.statusText);
        }
        const token = await responce.json();
        console.log(token);
        setToken(token)
    }
    fetchData() 
  }

  return (
    <div className="App">
      <header>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <input id='login' name='login' placeholder='login' required></input>
              <input id='password' name='password' placeholder='password' required></input>
            </div>
            <button type='submit'>Login</button>
          </form>
        </div>
      </header>
      <News token={token.token}></News>
    </div>
  );
}

export default App;
