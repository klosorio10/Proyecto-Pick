import React, {Component} from 'react';


class VideoPlayer extends Component {

  render() {
      if(this.props.video) {
        const url = "https://www.youtube.com/embed/"+ this.props.video.id.videoId+ "?autoplay=0";
        return(
          <div className="col-md-8">
          <br>
          </br>
            <div className="row"></div>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={url} ></iframe>
            </div>
          </div>
        )
      }
      else {
        return(
          <div></div>
        )
      }
    }
}

export default VideoPlayer;
