import React, { useState } from 'react';
import '../style.css'


const HMBM = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="menu-button">
        ☰
      </button>
      <div className="menu-items">
        {isOpen && (
          <>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </>
        )}
      </div>
    </div>
  );
};

export default HMBM;

