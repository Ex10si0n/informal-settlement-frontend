import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar.tsx';
import Home from './pages/Home.tsx';
import Mapping from './pages/Mapping.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Sidebar />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mapping" element={<Mapping />} />
          {/* TODO: Add Techs and Data routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
