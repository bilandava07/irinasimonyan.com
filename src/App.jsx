import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import HomePage from '@/pages/HomePage.jsx';
import WorkshopsPage from '@/pages/WorkshopsPage';
import AboutPage from '@/pages/AboutPage';
import PaintingsPage from '@/pages/PaintingsPage';
import MainLayout from '@/layouts/MainLayout';



function App() {

  return (
    <Routes>
      {/* Main layout wraps all “normal” pages */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/paintings" element={<PaintingsPage />} />
        <Route path="/workshops" element={<WorkshopsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>

    </Routes>
  );
}

export default App
