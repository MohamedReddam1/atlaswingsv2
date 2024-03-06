// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './page1/main/mainPage';
import Navbar from './page1/navbar/Navbar';
import About from './page2/About/About'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/AtlasWings/" element={<MainPage />} />
        <Route path="/AtlasWings/About/" element={<About />} />
      </Routes>
      <Navbar />
    </Router>
  );
};

export default App;
