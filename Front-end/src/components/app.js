
import React, {Component} from 'react';
import Buscador from './buscador';
import VideoPlayer from './VideoPlayer';
import Comentarios from './comentarios/comentarios';
import Comparaciones from './productos/comparaciones';
import YTSearch from 'youtube-api-search';
import axios from 'axios';

const ROOT_URL = "http://localhost:3000";
const API_KEY = 'AIzaSyD7AeJ_fi01jWanRgPibiUCgWuSFb7nFkE';
class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      videos :[],
      video1:null,
      video2:null,
      video3:null,
      video4:null,
      video5:null
    };
  }

  buscarVideoYoutube(text) {
    YTSearch({key: API_KEY, term: text}, (videos) => {
      this.setState({
        videos: videos,
        video1: videos[0],
        video2: videos[1],
        video3: videos[2],
        video4: videos[3],
        video5: videos[4]
      });
    });
  }

  render() {
    return(
      <div>
        <Buscador buscarVideoYoutube={this.buscarVideoYoutube.bind(this)} />
        <div className="row margen">
          <VideoPlayer className="col-md-2" video={this.state.video1}/>
          <VideoPlayer className="col-md-2" video={this.state.video2}/>
          <VideoPlayer className="col-md-2" video={this.state.video3}/>
          <VideoPlayer className="col-md-2" video={this.state.video4}/>
          <VideoPlayer className="col-md-2" video={this.state.video5}/>
        </div>
      </div>
    )
  }
}

export default App;
