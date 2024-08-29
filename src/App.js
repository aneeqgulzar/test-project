import { useState, useEffect } from 'react';
import GridView from './Components/GridView.jsx';
import TileView from './Components/TileView.jsx';
import DetailView from './Components/DetailView.jsx';
import HMBM from './Components/HMBM.jsx';
import HM from './Components/HM.jsx';
import './style.css';

const App = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [view, setView] = useState('grid'); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setData(data.slice(0, 100))); 
  }, []);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  
  const handleCloseDetail = () => {
    setSelectedItem(null);
  };


  const toggleView = () => {
    setView(view === 'grid' ? 'tile' : 'grid');
  };

 
  const handleEdit = (item) => {
    console.log("Edit", item);
  };

  const handleFlag = (item) => {
    console.log("Flag", item);
  };

  const handleDelete = (item) => {
    console.log("Delete", item);
  };

  return (
    <div>
      <HMBM />
      <HM />
      <div className='app'>
        {selectedItem ? (
          <DetailView item={selectedItem} onClose={handleCloseDetail} isVisible={!!selectedItem} />
        ) : view === 'grid' ? (
          <GridView data={data} onClick={handleClick} />
        ) : (
          <TileView 
            data={data} 
            onEdit={handleEdit} 
            onFlag={handleFlag} 
            onDelete={handleDelete} 
          />
        )}
        <button className="switch-view-button" onClick={toggleView}>
          Switch to {view === 'grid' ? 'Tile' : 'Grid'} View
        </button>
      </div>
    </div>
  );
};

export default App;
