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
        const { sound, loop } = this.props;
        return (
            <Sound
                url={sound}
                playStatus={this.state.playStatus}
                volume={100}
                loop={loop}
                onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
                // playFromPosition={this.state.position}
                // autoLoad={true}
                // playbackRate={playbackRate}
                // onLoading={({ bytesLoaded, bytesTotal }) => console.log(`${bytesLoaded / bytesTotal * 100}% loaded`)}
                // onLoad={() => console.log('Loaded')}
                // onPlaying={({ position }) => console.log('Position', position)}
                // onPause={() => console.log('Paused')}
                // onResume={() => console.log('Resumed')}
                // onStop={() => console.log('Stopped')}
                
            />
        )
    }

}

export default Music;