import { useState } from 'react'
import './App.css'
import holbertonLogo from './assets/holberton-logo.jpg'
import { getCurrentYear, getFooterCopy } from './utils'
import Notifications from './Notifications'

function App() {

  return (
    <>
      <div className='root-notifications'>
        <Notifications />
      </div>
      <div className="App-header">
        <img src={holbertonLogo} alt="holberton logo"></img>
        <h1 style={{color: "#e1003c"}}>School Dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type='email' id='email'></input>

        <label htmlFor="password">Password:</label>
        <input type='password' id='password'></input>
        <button type='submit'>OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
      </div>
    </>
  )
}

export default App
