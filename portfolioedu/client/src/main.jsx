import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './store/store';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
 <BrowserRouter>
  <App />
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </BrowserRouter>
  </Provider>
)
