import React, { useState } from 'react';
import '../style.css';


const truncateTitle = (title, wordLimit) => {
  const words = title.split(' ');
  if (words.length <= wordLimit) return title;
  return words.slice(0, wordLimit).join(' ') + '...';
};

const Modal = ({ item, onClose, onEdit, onFlag, onDelete }) => {
  if (!item) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>Close</button>
        <h2>ID : {item.id}</h2>
        <h2>Title : {item.title}</h2>
        <img src={item.url} alt={item.title} className="modal-image" />
        <p>{item.body}</p>
      </div>
    </div>
  );
};

const TileView = ({ data, onEdit, onFlag, onDelete }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const wordLimit = 4; 

  const handleTileClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="tile-view">
      {data.map(item => (
        <div
          key={item.id}
          className="tile"
          onClick={() => handleTileClick(item)}
        >
          <div className="tile-content">
            <h3>{truncateTitle(item.title, wordLimit)}</h3>
          </div>
          <div className="tile-options">
            <button onClick={() => onEdit(item)}>Edit</button>
            <button onClick={() => onFlag(item)}>Flag</button>
            <button onClick={() => onDelete(item)}>Delete</button>
          </div>
        </div>
      ))}
      <Modal 
        item={selectedItem}
        onClose={handleCloseModal}
        onEdit={onEdit}
        onFlag={onFlag}
        onDelete={onDelete}
      />
    </div>
  );
};

export default TileView;
