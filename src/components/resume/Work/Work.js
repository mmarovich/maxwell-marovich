import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

import { CNAButton } from './jobs/CNA';

class Work extends Component {
    constructor(props) {
        super(props)

        this.state = {
            CNADesintegrate: false,
            CNAKeepHidden: false,
            CNAInfo: false
        }
    }

    // desintegrate = (buttonToHide) => this.setState({ [buttonToHide]: true })

    desintegrate = (whatToHide, whatToKeepHidden, whatToShow) => {
        this.setState({ [whatToHide]: !this.state.CNADesintegrate})
        setTimeout(() => { this.setState({ [whatToKeepHidden]: !this.state.CNAKeepHidden, [whatToShow]: !this.state.CNAInfo }) }, 3500)
    }

    render() {
        console.log(this.state)
        return (
            <div style={{ ...styles.slide, ...styles.slide3 }} >
                <h1>Work</h1>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <div style={{ width: 350, height: 500, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {!this.state.CNAKeepHidden ?
                            <CNAButton
                                // nextHide={this.nextHide}
                                desintegrate={this.desintegrate}
                                CNADesintegrate={this.state.CNADesintegrate}
                                CNAKeepHidden={this.state.CNAKeepHidden} /> : null}
                        <Zoom left opposite when={this.state.CNAInfo}>
                            <div style={{ height: '100%', width: '100%' }} onClick={() => this.desintegrate('CNAInfo', 'CNAKeepHidden', 'CNADesintegrate')} >
                                <h1 style={{ color: 'black' }}>Work info here!!</h1>
                            </div>
                        </Zoom>
                    </div>
                </div>

            </div>
        )
    }
}

const styles = {
    slide: {
        padding: 15,
        minHeight: 100,
        color: '#fff',
    },
    slide3: {
        backgroundColor: '#6AC0FF',
    },
};

export default Work;