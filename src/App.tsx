import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import StartScreen from './Pages/Start/Index';
import { Sidebar } from './Components';
import HomeScreen from './Pages/Home/Index';
import ChannelScreen from './Pages/User/Channel/Index';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<StartScreen />} />
        <Route path='/home' element={<Sidebar />}>
          <Route index element={<HomeScreen />} />
        </Route>
        <Route path='/channel/:id' element={<Sidebar />}>
          <Route index element={<ChannelScreen />} />
        </Route>
        <Route path='**' element={<div>404</div>} />
      </Routes>
    </Router>
  )
}

export default App;
