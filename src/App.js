import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navigation />
        <main>
          <Routes>
             
            <Route path="/home" element={<Home />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
