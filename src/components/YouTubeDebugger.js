import React from 'react'

class YouTubeDebugger extends React.Component {
    constructor() {
        super()

        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'

            }
        }
        }
    }

   handleChangeBitrate = () => {
       this.setState({
           settings: {
               ...this.state.settings,
                bitrate: 12
           }
       })
    // this.setState({
    //         settings: Object.assign({}, this.state.settings, {
    //         bitrate: 12
    //     })
    //     });
   }

   handleChangeResolution = () => {
       this.setState({
           settings: {
               ...this.state.settings,
            video: {
                ...this.state.settings.video,
                resolution: '720p'
            }
           }
       })
//    }

        // this.setState({
        //     settings: Object.assign({}, this.state.settings, {
        //     video: Object.assign({}, this.state.settings.video, {
        //     resolution: '720p'
        //     })
        // })
        // });
    }
    render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleChangeBitrate}></button>
        <button className="resolution" onClick={this.handleChangeResolution}></button>
      </div>
    );
  }

}

export default YouTubeDebugger;
