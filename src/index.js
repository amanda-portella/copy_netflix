import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './screens/Home';
import Login from './screens/Login';
import MovieSeries from './screens/MovieSeries';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" exact element = { <Login/> }/>
          <Route path="/home" element = { <Home/> }/>
          <Route path="/info/:type/:id" element = { <MovieSeries/> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
