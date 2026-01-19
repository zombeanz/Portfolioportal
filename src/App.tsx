import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ProjectDetail } from './pages/ProjectDetail';
import { ResumePage } from './pages/ResumePage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </Router>
  );
}