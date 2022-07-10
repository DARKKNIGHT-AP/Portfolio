import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './index.css';

import Home from "./routes/Home";
import Project from "./routes/Project";
import Tech from "./routes/Tech";
import Contact from "./routes/Contact";


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/tech' element={<Tech/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
