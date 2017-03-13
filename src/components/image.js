import React, { Component } from 'react';

class Image extends Component {

  constructor(props){
    super(props);
    this.state={
    };
  }


  render() {
      if(this.props.producto){
          return (
              <div>
                  <p> {this.props.producto.name} </p>
                  <img src={this.props.producto.thumbnailImage} />
              </div>
          );
      }else {
          return (
              <div>
                  <p> No hay nada </p>
              </div>
          );
      }


  }
}

export default Image;
