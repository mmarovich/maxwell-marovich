import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Experience extends Component {
    constructor(props) {
        super(props)

        this.state = { width: 0, height: 0 };
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

    render() {
        return (
            <div className="page" style={{ backgroundColor: 'blue' }}>
                <Link to={"/"}><h1>Hello</h1></Link>
                <Link to={"/"}><h1>Hello</h1></Link>
                <Link to={"/"}><h1>Hello</h1></Link>
                <Link to={"/"}><h1>Hello</h1></Link>
            </div>
        )
    }
}

export default Experience;