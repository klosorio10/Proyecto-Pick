import React, { Component } from 'react';
import './App.css';
import Image from './components/image';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        data:[]
    };
  }

  getObjetos(keyword) {
      this.state.data = [];
      axios.get('/' + keyword)
          .then(response => {
              this.setState({data: response.data.items})
          })
          .catch(function (error) {
              console.log(error);
          })
      console.log(this.state.data)
  }



  onChildChanged(fav){

  }


  render() {
    return (
      <div>
      <div className="row"> 
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <h1> Pick </h1>
        <p> Pick the product that fits you </p>

        <br></br>

              <input type="text" id="text" className="form-control" placeholder="busca el objeto a comparar"/>
              <br></br>
              <div className="row">
              <div className="col-md-2"></div>
             <div className="col-md-8">
              <button className="btn btn-info btn-block" onClick={(evt)=>{this.getObjetos(document.getElementById("text").value)}}>
              buscar productos
              </button>
              </div>
          </div>
          </div>
      </div>
          <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                  {this.state.data.map(image => {
                      return (
                          <div className="producto">
                          <Image producto={image}/>
                          </div>
                          );
                  })}
              </div>
              <div className="col-md-2"></div>
          </div>
      </div>
    );
  }
}

export default App;
