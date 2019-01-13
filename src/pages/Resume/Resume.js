import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
import SwipeableViews from 'react-swipeable-views';

import { ResumeTabs, AboutMe, Education, Work } from '../../components/resume';

class Resume extends Component {
    constructor(props) {
        super(props)

        this.state = {
            width: 0,
            height: 0,
            index: 0,
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    handleChange = (event, value) => {
        this.setState({
            index: value,
        });
    };

    handleChangeIndex = index => {
        this.setState({
            index,
        });
    };

    render() {
        const { index } = this.state;

        return (
            <div>
                <ResumeTabs index={index} handleChange={this.handleChange} />
                <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                    <AboutMe width={this.state.width} height={this.state.height} />
                    <Education width={this.state.width} height={this.state.height} />
                    <Work />
                </SwipeableViews>
            </div>
        );
    }
}

export default Resume;