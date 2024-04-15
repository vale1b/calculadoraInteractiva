import React from 'react';
import '../css/Pantalla.css';//Importamos los estilos para la pantalla.

//Creando el componente Pantalla que mostrara las operaciones a hacer y sus respectivos resultados.
//Definimos el componente haciendo uso de una funcion flecha ya que no tiene una estructura tan compleja.
const Pantalla = ({ input }) => (
  <div className='input'>
    {input}
  </div>
);

//Exportamos dicho componente.
export default Pantalla;