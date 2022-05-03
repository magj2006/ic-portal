import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { AuthClient } from '@dfinity/auth-client'

function App() {
  const [count, setCount] = useState(0)
  const [authClient, setAuthClient] = useState(async () => await AuthClient.create())

  async function updateView() {
    console.log("update view ")
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          <button type="button" onClick={() => authClient.then(async (ac) => {
            console.log("btn");
            console.log(ac);
            await ac.login({
              identityProvider: "https://identity.ic0.app/",
              onSuccess: updateView
            })
          })}>Sign in</button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
