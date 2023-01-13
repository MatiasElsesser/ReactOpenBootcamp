// Ejemplo Hooks:
//       -useState()
//       -useContext()

import React, { useState, useContext } from 'react';


/* Componente 1
      dispone de un contexto que va  atener un valor
      que recibe desde el padre
*/
const miContexto = React.createContext(null)



const Componente1 = () => {

      // Inicializamos un estado vacio que va a llenarse con los datos del contexto del padre

      const state = useContext(miContexto);

      return (
            <div>
                  <h1>
                        El token es: { state.token }
                  </h1>
                  {/* Pintamos el componente 2 */}
                  <Componente2></Componente2>
            </div>
      );
}

const Componente2 = () => {

      const state =  useContext(miContexto)


      return (
            <div>
                  <h2>
                        La sesion es: { state.sesion }
                  </h2>
            </div>
      );
}


export default function MiComponentecConContexto(){
      
      const estadoInicial = {
            token: "1234567",
            sesion: 1
      }
      
      // creamos el estado del componente
      const [sessionData, setSessionData] = useState(estadoInicial);

      function actualizarSesion(){
            setSessionData(
                  {
                        token: "JWT123456789",
                        sesion: sessionData.sesion + 1
                  }
            )
      }

      return(
            <miContexto.Provider value= { sessionData }>
                  {/* Todo lo que este aqui puede leer los datos de sessionData */}
                  {/* Ademas si se actualiza, los componentes de aqui tambien lo actualizan */}
                  <h1> *** Ejemplo de useState y useContext ***</h1>
                  <Componente1></Componente1>
                  <button onClick={actualizarSesion}> Actualizar Sesión </button>
            </miContexto.Provider>
      )
}