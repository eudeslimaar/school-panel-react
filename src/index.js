import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


ReactDOM.render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
      
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
