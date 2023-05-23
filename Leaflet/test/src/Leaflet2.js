import React, { useContext, useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import '../node_modules/leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import {Icon} from 'leaflet';
import './selector.css';
import Slider from '@mui/material/Slider';
// import Graph from "./Graph";
import AppContext from "./context/AppContext";

// Sistema totalmente dinamico, da igual las coordenadas que le insertes, 
// mientras los insertes en grupos, el programa se ocupara de adaptarse a la cantidad de grupos
export default function Leaflet2() { 
    const [initPositions, setInitPositions] = useState([])
    const [checkboxes, setCheckboxes] = useState([])
    const [newPositions, setNewPositions] = useState([])
    const [linePositions, setLinePositions] = useState([])
    const [lineNames, setLineNames] = useState([])
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    useEffect(() => {
      async function fetchInitPositions() {
        try {
          const response = await fetch("http://10.63.143.65:3010/Coordenadas", requestOptions);
          const result = await response.json();
          const APIPositions = result.map(obj => obj.latlon);
          const newInitPositions = [...initPositions]
          APIPositions.map((coordenadas) => {
            newInitPositions.push(coordenadas)
          })
  
  
          const APILineas = result.map(obj => obj.line);
          const newLineNames = [...lineNames]
          APILineas.map((nombres) => {
            newLineNames.push(nombres)
          })
          setLineNames(newLineNames)
  
          console.log(newInitPositions)
          setInitPositions(newInitPositions);
        } catch (error) {
          console.log('error', error);
        }
      }

      fetchInitPositions()
    }, []);

    useEffect(()=>{
      // fetchInitPositions();
      fetchKilometer()
      // fetchInitPositions()
      //para los checkboxes
      const newCheckboxes = [];
      initPositions.map((linea, lineaIndex) => {
        newCheckboxes[`${lineaIndex}`] = {name: `${lineNames[lineaIndex]}`,value :true};
      })

      //para los para el array con los IDs, coordenadas ordenadas y nombres
      const newPositions = initPositions.map((grupoCordenadas, grupoIndex) => {
        const positions = grupoCordenadas.map((pos, index) => {
          const id = index + 1;
          const position = [pos[1], pos[0]];
          const name = "grupo " + (grupoIndex + 1);
          return {id, position: position, name };
        });
        return positions;
      });

      const newLinePositions = newPositions.map((marker) => marker.map((line) => line.position)); 
      setCheckboxes(newCheckboxes)
      setNewPositions(newPositions);
      setLinePositions(newLinePositions)
    },[initPositions]) 

    const handleCheckboxChange = (event) => {
      const index = parseInt(event.target.id);
      const newCheckBoxValue = [...checkboxes];
      const newValue = {...newCheckBoxValue[index],value: !newCheckBoxValue[index].value,};
      newCheckBoxValue.splice(index, 1, newValue);
      setCheckboxes(newCheckBoxValue);
    };

    const [kilometers, setKilometers] = useState([[0],[1],[2],[3],[4]])

    async function fetchKilometer() {
      try {
        const response = await fetch("http://10.63.143.65:3010/Kilometro", requestOptions);
        const result = await response.json();
        const APIKilometers = result.map(obj => obj.kilometros);
        const initKilometers = []
        APIKilometers.map((km) => {
          initKilometers.push(km)
        })
        
        
        setKilometers(initKilometers)
        console.log(kilometers)
        setKM()
        // setKilometers(newKilometers);

      } catch (error) {
        console.log('error', error);
      }
    }

    const {setLine, setType, setData}= useContext(AppContext)

    const handleClick = async (type, line) => {
      setType(type);
      setLine(line);
      await fetchGraphData(type, line);
    }

    async function fetchGraphData(type, line) {
      try {
        const response = await fetch(`http://10.63.143.65:3010/Datos/${type}/${line}`, requestOptions);
        const result = await response.json();
        const sensordata = result.map(obj => obj.data);
        const dataArray = [];
        sensordata.map((dataline) => {
          dataArray.push(dataline)
        })
        const processedData = [];
        dataArray[0].map((data, index) => {
          processedData[`${index}`] = {pk:`${data[0]}`, left:`${data[1]}`, right:`${data[2]}`};
        })
        setData(processedData);
        console.log(processedData)
      } catch (error) {
        console.log('error', error);
      }
    }

      const [KMArray, setKMArray] = useState();
      const setKM = () => {
        const KMList = []
        kilometers.map((k, index) =>{
        const KMValue = [kilometers[index][0],kilometers[index][kilometers[index].length - 1]]
        KMList.push(KMValue)
      });
      setKMArray(KMList)
      }

      // handleKMChange = (event) => {

      // }
     
      

  return (
    <div id="maps">
      <div id="selector">
        <h1>Selector de lineas</h1>
        <form>
          {checkboxes.map((item, index) => {
            return (
              <div key={item.name}>
                <input
                  type="checkbox"
                  id={index}
                  name={item.name}
                  value={item.value}
                  checked={item.value}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={item.name}>{item.name}</label>
                <br />
              </div>
            );
          })}
        </form>
      </div>
      <MapContainer center={[43.29473618607522, -2.355245889465669]} zoom={11}>
        <TileLayer url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png" />
  
        {newPositions.map((marker, index) =>
          checkboxes[index]?.value && marker.map((data) => (
            <Marker key={data.id} position={data.position} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12.5, 41] })} />
          ))
        )}
        {console.log(checkboxes)}
        {linePositions.map((lines, index) => (
          checkboxes[index]?.value ? (
            <Polyline key={index} positions={lines} title="" color={"#" + Math.floor(Math.random() * 16777215).toString(16)} weight={7}>
              <Popup>
                <h1>{checkboxes[index].name}</h1>
                {/* <Slider
                  value={KMArray[index]}
                  onChange={handleKMChange}
                  valueLabelDisplay="auto"
                  // getAriaValueText={valuetext}
                /> */}
                <div>
                  <p>{KMArray[index][0] + " -- " + KMArray[index][1]}</p>
                  <form>
                    <div>
                      <label htmlFor="dataType">Selecciona tipo de dato:</label>
                      <select name="dataType" id="dataType">
                        <option value="align">Alineacion</option>
                        <option value="level">Niveles</option>
                      </select>
                    </div>
                    <div>
                      <button type='button' onClick={() => handleClick(document.getElementById("dataType").value, checkboxes[index].name)}>Filtrar</button>
                    </div>
                  </form>
                </div>
              </Popup>
            </Polyline>
          ) : null
        ))}
      </MapContainer>
    </div>
  );
  }
