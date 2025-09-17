import { useState } from 'react'
import './App.css'
import holbertonLogo from './assets/holberton-logo.jpg'
import { getCurrentYear, getFooterCopy } from './utils.js'
import Notifications from './Notifications.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="root-notifications">

      </div>
      <div className="App-header">
        <img src={holbertonLogo} alt="holberton-logo" />
        <h1 style={{ color: "#e1003c" }}>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>

      <div className="App-footer">
        <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}holberton School
        </p>
      </div>
    </>
  )
}

export default App
