import React from 'react';
import '../css/Boton.css';//Importando los estilos de los botones.

//Creando componente para los botones de nuestra calculadora.
function Boton(props) {

  //Definiedo la funcion. Devuelve true si se cumplen todas estas condiciones, lo que indica que el valor es un operador.
  const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=');
  };

  return (
    <div className={ `boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd() }
    onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  )
}

//Exportando dicho componente.
export default Boton;