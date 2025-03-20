// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EntryPage from './components/EntryPage';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Prestations from './components/Prestations';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/accueil" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/prestations" element={<Prestations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;