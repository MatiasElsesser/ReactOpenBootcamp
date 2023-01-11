import React, {useState} from 'react'; // NO OLVIDAR DE IMPORTAR useState
import PropTypes from 'prop-types';

// hacemos el mismo componente pero como funcion
// al ser una funcion no posee props ni state, asi que las definimos manualmente a travez de un hook
const GreetinF = (props) => {
      // intro a useState
            // const [variable, metodoParaActualizarla] = useState(valorInicial)
      const [age, setage] = useState(25)

      const birthday = () => {
            //actualizamos el state aqui
            setage(age + 1)
      }

      return (
            <div>
            <h1>
                  Hola {props.name} dede componente funcional !
            </h1>
            <h2>
                  Tu edad es de:  {age}
            </h2>
            <div>
                  <button onClick={birthday}>
                        Cumplir Años
                  </button>
            </div>
      </div>
      );
};


GreetinF.propTypes = {
      name: PropTypes.string,
};


export default GreetinF;
