import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Registration from './components/Registration';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Use state to track the current page

  const handleJoinClick = () => {
    setCurrentPage('registration'); // Set the current page to 'registration'
  };

  return (
    <div>
      <div className="section-0">
        {currentPage === 'home' ? (
          <div>
            <Home onJoinClick={handleJoinClick} />
          </div>
        ) : (
          <div>
            <Registration />
          </div>
        )}
      </div>
      <div className="section-1">
      </div>
      <div className="section-2">
      </div>
      <div className="section-3">
      </div>
    </div>
  );
}
export default App;