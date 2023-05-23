import React from 'react';
// import { useState } from 'react';
import "../styles/portfolioP.css";

export const StreetP = React.forwardRef((props, ref) => {
    const fotos = [];
    const importAll = (r) => {
      r.keys().forEach((key) => fotos.push(r(key)));
    };
    importAll(require.context('./images/portfolio/street', false, /\.(png|jpg|svg)$/));
    console.log(fotos);

    const handleMouseclick = (event) => {
      const id = event.target.id;
      document.getElementById(id)?.requestFullscreen()
    };
  
    return (
      <div className='portfolioMain' ref={ref}>
      <h1>fotografía callejera</h1>
      <div className='portfolioText'>
      <p>Distintas historias en las mismas calles de siempre. Esa es la base de la fotografia callejera. 
      Todo lo que capturo son preciosas casualidades. Distintas cosas que ocurren en el dia a dia. 
      Las personas son igual de importantes que el entorno, entonces es importante capturar las dos como se deben. 
      Hay que ser rapido y hay que estar ahi fuera, esperando a que ocurran, ya que nada se puede forzar.</p>
      </div>
      <div id='streetP' className='portfolioContainer'>
        {fotos.map((image, index) => (
          <img id = {'street' + index} key={index} src={image} alt={`${index}`} onClick={handleMouseclick}/>
        ))}  
      </div>
      </div>
    );

});