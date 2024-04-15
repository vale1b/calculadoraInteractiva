import logo from './logo.svg';
import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'; //Importando el logo de freeCodeCamp.
import Boton from './components/Boton';//Importamos el componente Boton para poder renderizarlo.
import Pantalla from './components/Pantalla';//Importamos el componente Pantalla para poder renderizarlo.
import BotonClear from './components/BotonClear';//Importamos el componente BotonClear para poder renderizarlo.
import { useState } from 'react';//Importamos el hook useState para agregarle un estado al componente App.
import { evaluate } from 'mathjs';//Importamos evaluate para poder realizar un operacion matematica.

//Definiendo componente principal de la calculadora.
function App() {

  //Haciendo uso del hook useState para poder mostrar texto en la pantalla.
  const [input, setInput] = useState('');

  //Hacemos esta funcion para poder actualizar el valor de input y despues la pasamos como una props en cada uno de los botones exceptuando el de CLEAR.
  const agregarInput = val => {
    setInput(input + val);
  };

  //Hacemos esta funcion para poder realizar la operacion matematica. El usuario debe ingresar valores para realizar dicha operacion.
  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Operacion no valida, ingrese valores.')
    }
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={ freeCodeCampLogo }
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>
            1
          </Boton>
          <Boton manejarClic={agregarInput}>
            2
          </Boton>
          <Boton manejarClic={agregarInput}>
            3
          </Boton>
          <Boton manejarClic={agregarInput}>
            +
          </Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>
            4
          </Boton>
          <Boton manejarClic={agregarInput}>
            5
          </Boton>
          <Boton manejarClic={agregarInput}>
            6
          </Boton>
          <Boton manejarClic={agregarInput}>
            -
          </Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>
            7
          </Boton>
          <Boton manejarClic={agregarInput}>
            8
          </Boton>
          <Boton manejarClic={agregarInput}>
            9
          </Boton>
          <Boton manejarClic={agregarInput}>
            *
          </Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>
            =
          </Boton>
          <Boton manejarClic={agregarInput}>
            0
          </Boton>
          <Boton manejarClic={agregarInput}>
            .
          </Boton>
          <Boton manejarClic={agregarInput}>
            /
          </Boton>  
        </div>  
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>    
      </div>
    </div>
  );
}

export default App;
