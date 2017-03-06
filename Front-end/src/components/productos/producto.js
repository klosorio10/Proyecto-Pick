import React, {Component} from 'react';
import Features from './features';

class Producto extends Component {

  constructor(props){
    super(props);

    this.state={
      titulo:'Lavadora LG',
      marca:'LG',
      imagen:'',
      caracteristicas:[]
    }
  }

  render(){
    return(
      <div>
      <div className="producto">
        <h2>{this.props.titulo}</h2>
        <img src={this.props.imagen}></img>
        <h3>{this.props.marca}</h3>
        caracteristicas = {this.props.caracteristicas}
        console.log(caracteristicas);
      </div>
        <Features/>
      </div>
    )
  }

}

export default Producto;
