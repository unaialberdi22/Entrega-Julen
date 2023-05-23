import React from 'react';
// import { useState } from 'react';
import "../styles/portfolio.css";

export const Portfolio = React.forwardRef((props, ref) => {
  
    return (
      <div id='portfolio' ref={ref}>
         <h1>PORTFOLIO</h1>
         <div>
          <p>Aqui podras ver mis trabajos separados en 4 categorias: Retratos, fotografia callejera, deportiva y analogica.
          Una recopilacion de mis mejores fotos que he sacado a mi bola o a clientes. Esta es la parte mas importante del fotografo.
          De esta manera puedes ver la manera en la que trabajo. En general soy bastante purista. Intento editar lo menos posible y no 
          uso efectos ni hago grandes retoques. Siempre al natural.</p>
         </div>
         <div id='imgPortfolio'>
            
         </div>
      </div>
    );
});