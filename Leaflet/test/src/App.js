// primero de todo instalar leaflet: npm install leaflet react-leaflet

import './App.css';
import React, { useEffect, useState } from "react";
import Leaflet from './Leaflet'
import Graph from './Graph'
import AppContext from './context/AppContext'

// Eso es para mostrar el mapa
function App() {
  const [line, setLine] = useState("");
  const [type, setType] = useState("");
  const [data, setData] = useState("");
  const [fechaData, setFechaData] = useState("");
  const [display, setDisplay] = useState(false);
  return (
    <div id='mainScreen'>
    <AppContext.Provider value={{line, setLine, type, setType, data, setData, fechaData, setFechaData, display, setDisplay}}>
      <Leaflet />
      <Graph />
    </AppContext.Provider>
    </div>
  );
}

export default App;
