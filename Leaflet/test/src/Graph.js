import React, { useContext, useState, useEffect } from "react";
import './graph.css';
import AppContext from "./context/AppContext";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

export default function Graph() {

    const {line, type, data, fechaData, display}=useContext(AppContext)

    const [areaVisibility, setAreaVisibility] = useState([true, true]); // Initial visibility state for each area

  const handleCheckboxChange = (index) => {
    setAreaVisibility((prevVisibility) => {
      const updatedVisibility = [...prevVisibility];
      updatedVisibility[index] = !updatedVisibility[index];
      return updatedVisibility;
    });
  };

  const [KMRef, setKMRef] = useState();

  useEffect(() => {
    if (data && data.length > 0) {
      setKMRef([data[0].pk + " y " + data[data.length - 1].pk]);
      console.log("KMRef is: " + KMRef)
    }
  }, [data]);

  

 return display?(  
    <div className="graph">
      <p>Mostrando <strong>{type}</strong> de la ruta <strong>{line}</strong></p>
      <p>entre los kilomentros <strong>{KMRef}</strong></p>
      <p>del dia <strong>{fechaData}</strong></p>
      <div className="graph-container">
        <div id="graph-checkbox">
          <div>
              <label id="left">
                <input
                  type="checkbox"
                  checked={areaVisibility[0]}
                  onChange={() => handleCheckboxChange(0)}
                />
                <strong>{type + " izquierdo"}</strong>
              </label>
            </div>
            <div>
              <label id="right">
                <input
                  type="checkbox"
                  checked={areaVisibility[1]}
                  onChange={() => handleCheckboxChange(1)}
                />
                <strong>{type + " derecho"}</strong>
              </label>
            </div>
        </div>
        <div>
          <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 55,
                left: 0,
                bottom: 0,
              }}
            >
              
              <XAxis dataKey="pk" tick={{ dy: 2, dx: 22 }} interval={Math.ceil(data.length / 6)} />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />

              {areaVisibility[0] && (
                <Area
                  name="left"
                  type="monotone"
                  dataKey="left"
                  stackId="0"
                  stroke="#5ebfff"
                  fill="#5ebfff"
                />
              )}

              {areaVisibility[1] && (
                <Area
                  name="right"
                  type="monotone"
                  dataKey="right"
                  stackId="1"
                  stroke="#ff6857"
                  fill="#ff6857"
                />
              )}
          </AreaChart>
        </div> 
    </div>
  </div>
  ):<void />
} 


