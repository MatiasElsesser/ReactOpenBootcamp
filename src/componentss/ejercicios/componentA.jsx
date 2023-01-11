import React, { Component } from 'react';
import ComponentB from './componentB';

class ComponentA extends Component {

      render(){
            return(
                  <div>
                        <h1>Nombre: { this.props.name }</h1>
                        <h1>Apellido: { this.props.apellido }</h1>
                        <h1>Email: { this.props.email }</h1>
                        <ComponentB contacto={ ComponentA }/>
                  </div>
            )
      }
}

export default ComponentA