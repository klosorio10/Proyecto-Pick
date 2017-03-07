import React, {Component} from 'react';
import Comparacion from './comparacion';
import Producto from './producto';
import Features from './features';
import ReactDOM from 'react-dom';
import axios from 'axios';

const ROOT_URL = "http://localhost:3000"; // es claro que si dejan esto como ROOT URL no les va a servir la conexion con el backend en herok
class Comparaciones extends Component {

  constructor(props){
    super(props);

    this.state={
      comparaciones:[],
      comparacion:null
    }
  }

  cargarInformacion(){
    axios.get(ROOT_URL+ "/comparaciones")
    .then(response => {
      this.setState({
        comparaciones: response.data
      })
    })
  }


  render(){ // no usan nunca la funcion cargar informacion, solo crean una comparacion, que no es dinamica y esta limitada a lo que el render cree en el otro archivo
    return(
      <div>
      <Comparacion/> 
      </div>
    )
  }
}
ReactDOM.render(<Comparaciones/>, document.querySelector('#productos'));
export default Comparaciones;
