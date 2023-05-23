import React from 'react';
// import { useState } from 'react';
import "../styles/portfolioP.css";

export const AnalogP = React.forwardRef((props, ref) => {
    const fotos = [];
    const importAll = (r) => {
      r.keys().forEach((key) => fotos.push(r(key)));
    };
    importAll(require.context('./images/portfolio/analog', false, /\.(png|jpg|svg)$/));
    console.log(fotos);

    const handleMouseclick = (event) => {
      const id = event.target.id;
      document.getElementById(id)?.requestFullscreen()
    };
  
    return (
      <div className='portfolioMain' ref={ref}>
      <h1>fotografía analógica</h1>
      <div className='portfolioText'>
      <p>Un tipo de fotografia mas lenta, la de toda la vida. Tiene su propia categoria por que es mas especial para mi y 
      por que las historias que capturo son muy distintas a las digitales. La gracia de esto es que no ves las fotos hasta que terminas 
      y revelas el carrete. Cada foto cuenta, y hay que medir la luz y enfocar siempre lo mejor posible.</p>
      </div>
      <div id='AnalogP' className='portfolioContainer'>
        {fotos.map((image, index) => (
          <img id = {'analog' + index} key={index} src={image} alt={`${index}`} onClick={handleMouseclick}/>
        ))}  
      </div>
      </div>
    );
});