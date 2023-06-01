// primero de todo instalar leaflet: npm install leaflet react-leaflet

import './App.css';
import React, { useEffect, useState } from "react";
import Leaflet from './Leaflet'
import Leaflet2 from './Leaflet2'
import Selector from './Selector'
import Graph from './Graph'
import AppContext from './context/AppContext'

// Eso es para mostrar el mapa
function App() {
  const [line, setLine] = useState("");
  const [type, setType] = useState("");
  const [data, setData] = useState("");
  const [fechaData, setFechaData] = useState("");
  return (
    <div id='mainScreen'>
    <AppContext.Provider value={{line, setLine, type, setType, data, setData, fechaData, setFechaData}}>
      <Leaflet2 />
      <Graph />
    </AppContext.Provider>
    </div>
  );
}

export default App;
