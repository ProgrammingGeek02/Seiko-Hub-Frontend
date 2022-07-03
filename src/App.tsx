import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import StartScreen from './Pages/Start/Index';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<StartScreen />} />
      </Routes>
    </Router>
  )
}

export default App;
