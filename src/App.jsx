import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import HomePage from '@/pages/HomePage.jsx';
import WorkshopsPage from './pages/WorkshopsPage';
import AboutPage from './pages/AboutPage';



function App() {

  return (
    <Routes>
      <Route path='/' element= {<HomePage />} />
      <Route path='/workshops' element= {<WorkshopsPage />} />
      <Route path='/about' element= {<AboutPage />} />

    </Routes>
  );
}

export default App
