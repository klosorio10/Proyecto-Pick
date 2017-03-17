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
                  <input type="image" src={this.props.producto.thumbnailImage} onClick={console.log('me hizo un click!')}/>
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
