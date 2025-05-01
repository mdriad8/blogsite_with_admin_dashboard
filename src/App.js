import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Company from './pages/CompanyPage';
import Jobs from './pages/JobsPage';
import Resources from './pages/ResourcesPage';
import Contact from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/companies" element={<Company/>} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
