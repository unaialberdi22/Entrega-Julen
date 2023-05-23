import React from 'react'
import "../styles/bio.css";

import photoBio from "./images/bio.jpg";

export const Bio = React.forwardRef((props, ref) => {
    return (
        <div id='mainB' ref={ref}>
            <h1>BIOGRAFÍA</h1>
            <div id='bio'>
                <div id='picture'>
                    <img src={photoBio} alt="Unai" />
                </div>
                <div className='bioText'>
                    <p>
                        Unai Alberdi es un fotógrafo documental, 
                        de retratos y deportes de Zarautz, 
                        donde a dia de hoy vive y trabaja.
                        <br></br>
                        <br></br>
                        Comenzando la fotografia a los 17, 
                        ha formado parte de varias exposiciones, incluida la suya propia, 
                        y a trabajado en eventos de todo tipo, demostrando ser un fotografo 
                        polivalente. Sin embargo, la fotografia callejera es donde encontramos 
                        sus mejores obras, fotografiando las mismas "calles" pero las muy distintas historias 
                        de los diferentes pueblos costeros del norte del Pais Vasco.
                        <br></br>
                        <br></br>
                        Actualmente se dedica a la fotografía digital y analogica, aprendiendo y 
                        enseñando a cualquiera que muestre interes o pasion sobre este arte tan 
                        poco valorado en este país. Siempre intentando mejorar y llegar mas lejos 
                        para conseguir la ansiada meta de vivir de la fotografía.
                        <br></br>
                        <br></br>
                        Tambien forma parte de la mitica Asociacion Fotografica de Zarautz, del cual 
                        es un miembro muy activo, participando en rallys y concursos con moderado exito. 
                        Curiosamente, es tambien desarrollador web, y es él mismo quien ha hecho esta pagina.
                        <br></br>
                        <br></br>
                        Hay muchas maneras de aproximarse a la fotografia, y todas son importantes. 
                        No para transmitir un sentimiento, sino para hacer sentir. Todos queremos contar una historia, 
                        pero debemos dejar que el publico observe la obra y saque sus propias conclusiones y sentimientos. 
                        No podemos imponer o dictar lo que uno debe sentir. Por eso, mientras hagamos sentir, sea lo que sea, debemos agradecerlo.
                        <br></br>
                        <br></br>
                        Fotografo para: Pic'em up / Zarauzko Eskubaloi taldea / OrekaTolosa / Hegoak, erroak eta eroak
                    </p>
                </div>
            </div>
        </div>
    );
});