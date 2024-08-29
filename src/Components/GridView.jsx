import React from 'react';
import '../style.css';


const truncateTitle = (title, wordLimit) => {
  const words = title.split(' ');
  if (words.length <= wordLimit) return title;
  return words.slice(0, wordLimit).join(' ') + '...';
};

const GridView = ({ data, onClick }) => {
  const wordLimit = 3; 

  return (
    <div className="grid-view">
      {data.map(item => (
        <div
          key={item.id}
          className="grid-item"
          onClick={() => onClick(item)}
        >
          
          <div className="item-content">
            <h3>{truncateTitle(item.title, wordLimit)}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridView;
