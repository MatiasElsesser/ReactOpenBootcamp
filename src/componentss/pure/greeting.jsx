import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class Greeting extends Component {
      constructor(props){// props es como un parametro o propedad que usaria un elemento HTML
            super(props)// ponemos super para trabajar con las pripiedades que vengan del componente

            // el state es informacion privada del componente, son como propiedades de la clase
            // El estado es inmutable, solo podemos cambiarlo con una funcion especifica llamada setState() en los componentes d etipo clase
            this.state = {
                  age: 25
            }
      }
      
      
      render() {
            return (// SOLO PUEDE DEVOLVER UN UNICO ELEMENTO PADRE
                  <div>
                        <h1>
                              {/* Aqui usamos props ya que le vamos a pedir al usuario del componente un name, que va a poner como propiedad del elemento html*/ }
                              Hola {this.props.name} !
                        </h1>
                        <h2>
                        {/*aqui accedemos al state del elemento */}
                              Tu edad es de:  {this.state.age}
                        </h2>
                        <div>
                              <button onClick={this.birthday}>
                                    Cumplir Años
                              </button>
                        </div>
                  </div>
            );
      }


      birthday = () => {
            // setState nos permite generar un nuevo estado y cambiar la vista
            this.setState((prevState) => (
                  {
                        age: prevState.age + 1
                  }
            ))
      }
}
// los proptypes es para tipar el dato que pasamos en props, es necesario en js pero en typescript no
Greeting.propTypes = {
      name: PropTypes.string, // es buena practica poner la coma para el proximo objeto que pueda llegar a poner
};


export default Greeting;
