import React, { useContext, useEffect, useState,PureComponent } from "react";
import './graph.css';
import AppContext from "./context/AppContext";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Graph() {

    const {line, type, data}=useContext(AppContext)

    const [areaVisibility, setAreaVisibility] = useState([true, true]); // Initial visibility state for each area

  const handleCheckboxChange = (index) => {
    setAreaVisibility((prevVisibility) => {
      const updatedVisibility = [...prevVisibility];
      updatedVisibility[index] = !updatedVisibility[index];
      return updatedVisibility;
    });
  };

  

  return (
    <div className="graph">
      <p>{"Mostrando " + type + " de la ruta " + line}</p>
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
              width={700}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 40,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="pk" tick={{ dy: 2, dx: 22 }} interval={Math.ceil(data.length / 10)} />
              <YAxis />
              <Tooltip />

              {areaVisibility[0] && (
                <Area
                  name="left"
                  type="monotone"
                  dataKey="left"
                  stackId="1"
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
  );
} 


