import React, { Component } from 'react';
import './CNAButton.css';

import ParticleEffectButton from 'react-particle-effect-button';

class CNAButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hidden: false
        }
    }

    render() {
        return (
            <ParticleEffectButton
                color='red'
                hidden={this.state.hidden}
                // duration={2000}
                // type={['circle','rectangle','triangle'][Math.floor(Math.random()*3)]}
            >
                <button
                    className="button button3"
                    onClick={() => this.setState({hidden: true})}
                >Medical</button>
            </ParticleEffectButton>
        )
    }
}

export default CNAButton;