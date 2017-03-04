import React, {Component} from 'react';

class Comentario extends Component{
  render(){
    return(
      <div>{this.props.text}</div>
    )
  }
}

export default Comentario;
