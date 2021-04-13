import React from 'react'
import './App.css'
import Hello from './components/hello'
import GlobalContextProvider from './context/globalContextProvider'

function App() {

  return (
    <div className="App">
      <GlobalContextProvider>
        <Hello />
      </GlobalContextProvider>
    </div>
  )
}

export default App
