import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        
        
      </Routes>
    </Router>
  );
}

export default App;
