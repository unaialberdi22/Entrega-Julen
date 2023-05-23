import React from 'react'
import "../styles/contact.css";
import emailjs from '@emailjs/browser'

export const Contact = React.forwardRef((props, ref) => {
    const mandarEmail = (e) => {
        e.preventDefault();
        alert("Reserva completada. En breve recibiras un email de confirmacion. Gracias!");
        
        emailjs.sendForm('service_r24zmn9', 'template_0pz1cho', e.target, 'QcqyZeGV8umngQVjH')
    }
    
    return(
        <div id='contact' ref={ref}>
            <h1>CONTACTO</h1>
            <div className='contactText'>
            <p>Aqui puedes reservar una sesion conmigo, o puedes contactarme para cualquier duda o peticion especial</p>
            </div>
            <div className='formEmail'>
                <div id='mitad1'>
                    <h1>Tipo de sesión:</h1>
                    <p><b>1.-Individual:</b> Este tipo lleva un poco mas de trabajo por que te tengo que conocer un poco, 
                    asi que en la caja de explicacion describete y dime que tipo de fotos quieres</p>
                    <p><b>2.-Pareja:</b> Esta es algo mas facil de planear, por que ya se sabe que se quiere. 
                    Pero lleva mas tiempo en sacar las fotos por que tiene que surgir, o tiene que haber confianza. 
                    Atentos a las casillas extra, suelen marcar mucho la diferencia en las fotos. Contadme vuestra vida en la caja de explicacion.</p>
                    <p><b>3.-Banda:</b> Si es para un concierto, sesion aparte o fotos para album, sea lo que sea, 
                    describelo en la caja de explicacion.</p>
                    <p><b>4.-Evento deportivo:</b> Durante años he cubierto distintos tipos de deportes, desde balonmano a motociclismo, 
                    asi que describeme tu evento brevemente. Selecciona la hora una o dos horas antes del comienzo del evento para que pueda llegar antes</p>
                    <p><b>5.-Especial /Otro:</b> Seleccionar esta en caso de no coincidir con ninguna de las anteriores. Rellena todo y cuantame que es lo que deseas. 
                    Te contactare para saber un poco mas acerca de ello.</p>
                </div>
                <div id='mitad2'>
                    <form id='formulario' onSubmit={mandarEmail}>
                        <div>
                            <label>Tipo de sesión:</label>
                            <select id="sesion" name="sesion">
                                <option value="Individual">Individual</option>
                                <option value="Pareja">Pareja</option>
                                <option value="Banda">Banda</option>
                                <option value="E. Deportivo">E. Deportivo</option>
                                <option value="Especial/Otro">Especial/Otro</option>
                            </select>
                        </div>
                        <div>
                        <label>La sesion en interior/estudio o exterior?</label>
                            <select id="extra1" name="extra1">
                                <option value="Interior/Estudio">Interior/Estudio</option>
                                <option value="Exterior">Exterior</option>
                            </select>
                        </div>
                        <div>
                        <label>(Solo exterior) Estas dispuesto a ensuciarte/ mojarte en la sesion?</label>
                            <select id="extra2" name="extra2">
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div>
                            <label>Lugar de la sesion:</label>
                            <input type='text' name='place' id='place' />
                        </div>
                        <div>
                            <label>Horario (en hh:mm):</label>
                            <input type='text' name='time' id='time' />
                        </div>
                        <div>
                            <label>Caja de explicación (opcional):</label>
                            <textarea type='text' name='descripcion' id='descripcion'/>
                        </div>
                        <div>
                            <label>Nombre:</label>
                            <input type='text' name='name' id='name' />
                        </div>
                        <div>
                            <label>Tu email:</label>
                            <input type='text' name='Demail' id='Demail' />
                        </div>
                        <div>
                            <label>Tu numero de telefono:</label>
                            <input type='text' name='phone' id='phone' />
                        </div>
                        <div>
                            <button type='submit' className='butonEnviarForm'>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
});