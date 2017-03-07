import React, {Component} from 'react';

class Comentario extends Component{ // este es  el componente que hizo Fabio la vez pasada, y no lo integran al app.js o a la logica general de uso
  render(){
    return(
      <div>{this.props.text}</div>
    )
  }
}

export default Comentario;
