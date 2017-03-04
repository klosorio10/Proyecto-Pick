import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Comentario from './comentario';

class Comentarios extends Component{

  constructor(props){
    super(props);
      this.state = {
        comentarios:[],
        comentarioActual:''
      }
  }

  guardarComentario(evento){
    evento.preventDefault();
    this.setState({
      comentarios: this.state.comentarios.concat(this.state.comentarioActual),
      comentarioActual:''
    });
  }

  render() {
    return(
      <div>
      {this.state.comentarios && this.state.comentarios.map((comentario,index) => {
        return <Comentario key={index} text={comentario}/>
      })}
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <form onSubmit={this.guardarComentario.bind(this)}>
            <input className="comments" placeholder="Cuentanos tu opinion" value={this.state.comentarioActual} type="text" onChange={(event) =>
              this.setState({comentarioActual: event.target.value})
            }/>
          </form>
        </div>
        <div className="col-md-2"></div>
      </div>
    )
  }
}

ReactDOM.render(<Comentarios/>, document.querySelector('#comentarios'));
export default Comentarios;
