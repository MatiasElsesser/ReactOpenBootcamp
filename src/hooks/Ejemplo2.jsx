/**
Ejemplo de uso de:
      - useState()
      - useRef()
      - useEffect()
*/

import React, { useState, useRef, useEffect } from "react";

const Ejemplo2 = () => {

      // Vamos a crear dos contadores distintos
      // Cada uno en un estado diferente
      const [contador1, setContador1] = useState(0);
      const [contador2, setContador2] = useState(0);

      //Creamos una referencia con useReff para asociar una variable con un elemento del DOM
      const miRef = useRef();

      function incrementar1(){
            setContador1(contador1 + 1);
      }

      function incrementar2 () {
            setContador2(contador2 + 1);
      }

      // Trabajamos con useEffect
      /* ? Caso 1: Ejecutrar SIEMPRE un snippet de codigo ( Cada vez que haya un cambio en el estado del componente se ejecuta lo que este en el useEffect )
      */
      // useEffect(() => {
      //       console.log("Cambio en el estado del componente")
      //       console.log("Mostrando referencia a elemento del DOM")
      //       console.log(miRef)
      // });

      // ? Caso 2: Ejecutar solo cuando cambie contador 1 (Cada vez que haya un cambio en contador 1 se ejecuta lo que diga el useEffect)

      // useEffect recibe primero un callback y como segundo parametro las dependencias, por eso al agregar contador1 solo se ejecutara el useEffect cuando dicha dependencia sufra cambios
      // useEffect(() => {
      //       console.log("Cambio de contador 1");
      //       console.log("Mostranfo referencia a elemento del DOM  ")
      // }, [contador1]);

      // ? Caso 2: Ejecutar solo cuando cambie contador 1 o 2 (Cada vez que haya un cambio en contador 1 o 2se ejecuta lo que diga el useEffect)
      useEffect(() => {
            console.log("Cambio de contador 1");
            console.log("Mostranfo referencia a elemento del DOM  ")
      }, [contador1, contador2]);


      return (
            <div>
                  <h1> *** Ejemplo de useState( ), useRef( ), y useEffect( ) ***</h1>
                  <h2>CONTADOR 1: { contador1 }</h2>
                  <h2>CONTADOR 2: { contador2 }</h2>

                  {/* Elemento referenciado */}
                  <h4 ref={miRef}>
                        Ejemplo de elemento refereciado
                  </h4>
                  {/* Botones para cambiar los contadores */}
                  <div>
                        <button onClick={incrementar1}> Incrementar contador 1 </button>
                        <button onClick={incrementar2}> Incrementar contador </button>
                  </div>
            </div>
      );
}

export default Ejemplo2;
