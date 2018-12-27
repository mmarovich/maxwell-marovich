import React, { Component } from 'react';
import Sound from 'react-sound';


class Music extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // controlled: true,
            // currentSong: songs[0],
            // position: 0,
            // volume: 100,
            // playbackRate: 1,
            // loop: false,
            playStatus: Sound.status.PLAYING
          };
    }

    render() {
        return (
            <Sound
                url={this.props.sound}
                playStatus={this.state.playStatus}
                // playFromPosition={this.state.position}
                volume={100}
                // autoLoad={true}
                // playbackRate={playbackRate}
                loop={this.props.loop}
                // onLoading={({ bytesLoaded, bytesTotal }) => console.log(`${bytesLoaded / bytesTotal * 100}% loaded`)}
                // onLoad={() => console.log('Loaded')}
                // onPlaying={({ position }) => console.log('Position', position)}
                // onPause={() => console.log('Paused')}
                // onResume={() => console.log('Resumed')}
                // onStop={() => console.log('Stopped')}
                onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
            />
        )
    }

}

export default Music;