import React from 'react';
import '../css/BotonClear.css';//Importamos los estilos del boton.

//Creamos el componente del boton que limpiara la pantalla de la calculadora.
//Definimos el componente haciendo uso de una funcion flecha debiado a que no tiene un compleja estructura.
const BotonClear = (props) => (
    <div className='boton-clear' onClick={props.manejarClear}>
        {props.children}
    </div>
);

//Exportamos dicho componente.  
export default BotonClear;