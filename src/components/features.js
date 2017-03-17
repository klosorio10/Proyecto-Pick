/**
 * Created by Karen on 17/03/17.
 */
import React, { Component } from 'react';

class  Features extends Component{

    render(){
        if(this.props.detalles){
            return(
                <div>
                    <h6>{this.props.detalles.shortDescription}</h6>
                    <p>{this.props.detalles.salePrice}</p>
                </div>
            );
        }else
        {
            return(
                <div></div>
            );
        }

    }

}

export default Features;
