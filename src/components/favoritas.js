import React, { Component } from 'react';

class Favoritas extends Component {

  constructor(props){
    super(props);
  }

  render() {
          return (
      <div>
            {/*Falta el alt*/}
      <img src={this.props.url}/>
      </div>
    );
  }
}

export default Favoritas;
