// import React, { useState } from "react";
// import './selector.css';

// function Selector() {
// return(
//     <div id="selector">
//     <h1>Selector de lineas</h1>
//         <form>
//             <input type="checkbox" id="CV-SS" name="linea" value="CV-SS"></input>
//             <label for="CV-SS">Casco viejo(Bilbao)-Amara</label><br></br>
//             <input type="checkbox" id="LS-I" name="linea" value="LS-I"></input>
//             <label for="LS-I">Lasarte-Irun</label><br></br>
//         </form>
//     </div>
// );
// } 

// export default Selector;

// function Map() {
//   const [showMarkers, setShowMarkers] = useState(true);

//   const handleCheckboxChange = (event) => {
//     setShowMarkers(event.target.checked);
//   };

//   return (
//     <div>
//       <label>
//         <input type="checkbox" checked={showMarkers} onChange={handleCheckboxChange} />
//         Show markers
//       </label>

//       <MapContainer center={[43.29473618607522, -2.355245889465669]} zoom={11} style={{ height: "100vh" }}>
//         <TileLayer url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png" />

//         {showMarkers && newPositions1.map((marker) => (
//           <Marker key={marker.id} position={marker.position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12.5, 41]})} >
//             <Popup>{marker.name }</Popup>
//           </Marker>
//         ))}

//         {showMarkers && <Polyline positions={line1Positions} title="Linea Amara-Bilbao" color="lime" weight={7}>
//           <Popup>
//             <h1>Linea Casco viejo-Amara</h1>
//             <form>
//               <label for="estaciones">Seleccione la estacion de salida</label>
//               <select id="estaciones" name="estaciones">
//                 <option value="Amara">Amara</option>
//                 <option value="Zarautz">Zarautz</option>
//                 <option value="Eibar">Eibar</option>
//                 <option value="Bilbao">Bilbao</option>
//               </select>
//               <br></br>
//               <label for="estaciones">Seleccione la estacion de destino</label>
//               <select id="estaciones" name="estaciones">
//                 <option value="Amara">Amara</option>
//                 <option value="Zarautz">Zarautz</option>
//                 <option value="Eibar">Eibar</option>
//                 <option value="Bilbao">Bilbao</option>
//               </select>
//               <br></br>
//               <br></br>
//               <button type="button" onclick="filtrando">filtrar</button>
//             </form>
//           </Popup>
//         </Polyline>}

//         {showMarkers && newPositions2.map((marker) => (
//           <Marker key={marker.id} position={marker.position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12.5, 41]})} >
//             <Popup>{marker.name }</Popup>
//           </Marker>
//         ))}

//         {showMarkers && <Polyline positions={line2Positions} title="Linea Lasarte-Irun" color="orange" weight={7}>
//           <Popup>
//             <h1>Linea Lasarte-Irun</h1>
//           </Popup>
//         </Polyline>}
//       </MapContainer>
//     </div>
//   );
// }