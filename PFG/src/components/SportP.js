import React from 'react';
// import { useState } from 'react';
import "../styles/portfolioP.css";

export const SportP = React.forwardRef((props, ref) => {
    const fotos = [];
    const importAll = (r) => {
      r.keys().forEach((key) => fotos.push(r(key)));
    };
    importAll(require.context('./images/portfolio/sport', false, /\.(png|jpg|svg)$/));
    console.log(fotos);

    const handleMouseclick = (event) => {
      const id = event.target.id;
      document.getElementById(id)?.requestFullscreen()
    };
  
    return (
      <div className='portfolioMain' ref={ref}>
      <h1>fotografía deportiva</h1>
      <div className='portfolioText'>
      <p>La velocidad, los reflejos y la habilidad con la camara son la clave para este tipo de fotografia. El evento es 
      directamente lo mas importante de la foto, asi que hay que destacarlo como sea. Mientras sea espectacular, 
      da igual donde sea, alli estare para inmortaliarlo.</p>
      </div>
      <div id='SportP' className='portfolioContainer'>
        {fotos.map((image, index) => (
          <img id = {'sport' + index} key={index} src={image} alt={`${index}`} onClick={handleMouseclick}/>
        ))}  
      </div>
      </div>
    );
});