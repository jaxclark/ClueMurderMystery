import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ClueProvider from './context/ClueProvider'




ReactDOM.render(
    <ClueProvider>
        <App />
    </ClueProvider>
    , document.getElementById('root'))