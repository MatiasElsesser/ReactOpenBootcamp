import React from 'react';

const ComponentB = (props) => {
      return (
            <div>
                  <h3> Contacto { props.contacto ? "en linea" : "no disponible" } </h3>
            </div>
      );
}

export default ComponentB;
