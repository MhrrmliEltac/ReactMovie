import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';
import axios from "axios";

import './reset.css';
import './common.css';

function App () { 

    return (
      <div className="app">
       <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/list/:id" element={<ListPage />} />
      </Routes>
      </div>
    );
  
  }

export default App;
