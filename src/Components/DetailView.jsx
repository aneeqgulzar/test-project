import React from 'react';
import '../style.css';

const DetailView = ({ item, onClose, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className={`detail-view ${isVisible ? 'visible' : 'hidden'}`}>
      <button className="close-button" onClick={onClose}>Close</button>
      <h2>ID : {item.id}</h2>
      <h2>Title : {item.title}</h2>
      <img  src={item.url} alt={item.title} className="detail-view-image" />
    </div>
  );
};


export default DetailView;
