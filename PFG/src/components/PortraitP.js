import React from 'react';
// import { useState } from 'react';
import "../styles/portfolioP.css";

export const PortraitP = React.forwardRef((props, ref) => {
    const fotos = [];
    const importAll = (r) => {
      r.keys().forEach((key) => fotos.push(r(key)));
    };
    importAll(require.context('./images/portfolio/portrait', false, /\.(png|jpg|svg)$/));
    console.log(fotos);

    const handleMouseclick = (event) => {
      const id = event.target.id;
      document.getElementById(id)?.requestFullscreen()
    };
  
    return (
    <div className='portfolioMain' ref={ref}>
      <h1>Retratos</h1>
      <div className='portfolioText'>
      <p>Cada persona es un mundo, y es el trabajo del fotografo adentrarse en el del modelo. Dependiendo el tipo de retrato, 
      puede variar el metodo, pero en todos es esencial la confianza, la comodidad delante de camara y la actitud para sacarlo como se debe. 
      </p>
      </div>
      <div id='PortraitP' className='portfolioContainer'>
        {fotos.map((image, index) => (
          <img id = {'portrait' + index} key={index} src={image} alt={`${index}`} onClick={handleMouseclick}/>
        ))}  
      </div>
      </div>
    );
});