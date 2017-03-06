import React, {Component} from 'react';
import Comparacion from './comparacion';
import Producto from './producto';
import Features from './features';
import ReactDOM from 'react-dom';
import axios from 'axios';

const ROOT_URL = "http://localhost:3000";
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


  render(){
    return(
      <div>
      <Comparacion/>
      </div>
    )
  }
}
ReactDOM.render(<Comparaciones/>, document.querySelector('#productos'));
export default Comparaciones;
