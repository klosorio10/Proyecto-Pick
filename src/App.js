import React, { Component } from 'react';
import './App.css';
import Image from './components/image';
import ReactDOM from 'react-dom';
import axios from 'axios';
import YTSearch from 'youtube-api-search';


const API_KEY = 'AIzaSyD7AeJ_fi01jWanRgPibiUCgWuSFb7nFkE';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selected: false,
            brands: [],
            videosA: [],
            videosB: [],
            selectedA: null,
            selectedB: null
        };
    }

    getObjetos(keyword) {
        this.state.data = [];
        this.state.selected = true;
        axios.get('/' + keyword)
            .then(response => {
                this.setState({data: response.data.items});
                var array = [];
                for (var i = 0; i < response.data.items.length; i++) {
                    axios.get('/item/' + response.data.items[i].itemId)
                        .then(response => {
                            array.push(response.data.brand);
                        })
                        .catch(function (error) {
                            console.log(error);
                        })
                }
                this.setState({brands: array});
            })
            .catch(function (error) {
                console.log(error);
            })
        console.log(this.state.data);
        console.log(this.state.brands);
        console.log(this.state.selected);
    }


    buscarVideoYoutubeA(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    buscarVideoYoutubeB(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }


    showInstructions() {
        if (this.state.selected == true) {
            return (
                <div className="instruction">
                    <br></br>
                    <h3>Selecciona los dos objetos que vas a comparar </h3>
                </div>
            );
        }
        return (<div></div>);
    }

    showOptions(){
        if (this.state.selectedA && this.state.selectedB != null) {
            return (
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
                    <div className="col-md-2">
                        {this.state.brands.map(brand => {
                            return (
                                <div>
                                    <p>Marca: {brand}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        }
        return (<div></div>);
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">

                        <br></br>

                        <input type="text" id="text" className="form-control" placeholder="busca el objeto a comparar"/>
                        <br></br>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <button className="btn btn-info btn-block" onClick={(evt) => {
                                    this.getObjetos(document.getElementById("text").value)
                                }}>
                                    buscar productos
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <p>{this.showInstructions()}</p>
                {this.showOptions()}
            </div>
        );
    }
}


export default App;
