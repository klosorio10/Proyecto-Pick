import React, {Component} from 'react';

class Features extends Component {

  constructor(props){
    super(props);

    this.state={
      featu1:'',
      valor1:'',
      featu2:'',
      valor2:'',
      featu3:'',
      valor3:'',
      featu4:'',
      valor4:'',
      featu5:'',
      valor5:''
    }
  }

  render(){
    return(
      <div>
        <h4>{this.state.featu1}</h4>
        <p>{this.state.valor1}</p>
        <br></br>
        <h4>{this.state.featu2}</h4>
        <p>{this.state.valor2}</p>
        <br></br>
        <h4>{this.state.featu3}</h4>
        <p>{this.state.valor3}</p>
        <br></br>
        <h4>{this.state.featu4}</h4>
        <p>{this.state.valor4}</p>
        <br></br>
        <h4>{this.state.featu5}</h4>
        <p>{this.state.valor5}</p>
        <br></br>
      </div>
    )
  }

}
export default Features;
