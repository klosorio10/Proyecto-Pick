import React, {Component} from 'react';
import Producto from './producto';
import Features from './features';

class Comparacion extends Component {

  constructor(props){
    super(props);

    this.state={
      producto1:null,
      producto2:null
    }
  }

  render(){ // van a comparar solo dos productos?
    return(
      <div>
      <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-4 producto1">
      <Producto imagen="http://comprabienprod.s3-website-us-east-1.amazonaws.com/tienda/oechsle/catalogo/linea-blanca/seccion/lavadoras/producto/lavadora-lg-wf-t1166tp-746/thumb/1600x1599/lavadora-lg-wf-t1166tp-746.jpg" titulo='Lavadora LG' marca='LG'/>
      </div>
      <div className="col-md-4 producto2">
      <Producto imagen="http://2.bp.blogspot.com/-fD0SOigeU68/Uuu8SFNJOuI/AAAAAAAAC6E/bA3_RrwYLJY/s1600/lavadora-Samsung-WF806U4SAWQ.jpg" titulo='Lavadora Samsung' marca='Samsung'/>
      </div>
      <div className="col-md-2"></div>
      </div>
      </div>
    )
  }

}

export default Comparacion;
