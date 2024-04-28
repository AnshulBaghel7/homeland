import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import PostProperty from './pages/PropertyDetails';
import PropertyDetails from './pages/PropertyDetails';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path='/login' element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/PropertyDetails" element={<PropertyDetails />} />
    </Routes>

    
    </BrowserRouter>
  )
}

export default App