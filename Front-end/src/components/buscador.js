import React, {Component} from 'react';

class Buscador extends Component {

  constructor(props) {
      super(props);
    }

    buscar(evento) {
      this.props.buscarVideoYoutube(evento);
    }

  render(){
    return(
      <div className="col-md-12 buscador">
        <input className="buscador" type="text" placeholder="Busca un articulo" onChange={(event) => this.buscar(event.target.value)}/>
        <br>
        </br>
      </div>
    );
  }
}

export default Buscador;
