import React, { Component } from 'react';
import './CNAButton.css';

import ParticleEffectButton from 'react-particle-effect-button';

class CNAButton extends Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     hidden: false,
        //     initialHide: false
        // }
    }

    render() {
        return (
            <ParticleEffectButton
                color='red'
                hidden={this.props.CNADesintegrate}
                duration={2000}
                type={['circle', 'rectangle', 'triangle'][Math.floor(Math.random() * 3)]}
            // onBegin={() => this.props.nextHide('CNANextHide')}
            >
                <button
                    className={`button button3`}
                    style={{ visibility: this.props.CNAKeepHidden ? "hidden" : "visible" }}
                    onClick={() => this.props.desintegrate('CNADesintegrate', 'CNAKeepHidden', 'CNAInfo')}
                >Medical</button>
            </ParticleEffectButton>
        )
    }
}

export default CNAButton;