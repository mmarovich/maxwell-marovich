import React, { Component } from 'react';
import { FaSchool, FaPlusCircle } from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';
import Drawer from '@material-ui/core/Drawer';

import { HighSchoolInfo } from './schools';

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hovered: "",
            right: false,
        }
    }

    showSchool = (school) => {
        this.setState({ school })
    }

    iconSizeChange = (index) => {
        this.setState({ hovered: index })
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { width, height } = this.props;
        const { hovered, right } = this.state;

        return (
            <div style={{ padding: 15, color: '#fff', backgroundColor: 'rgb(10, 0, 153)', minHeight: height - 78 }} >
                <h1 style={{ textAlign: 'center' }}>Education</h1>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
                    <div style={{ width: '250px', margin: '15px 15px', textAlign: 'center' }}>
                        <FaSchool
                            size={hovered === 0 ? 250 : 200}
                            color='blue'
                            style={{ transition: 'all 0.3s' }}
                            onMouseEnter={() => this.iconSizeChange(0)}
                            onMouseLeave={() => this.setState({ hovered: "" })}
                            onClick={this.toggleDrawer('right', true)}
                        />
                        <h2 style={{ margin: 0 }}>High School</h2>

                    </div>
                    <div style={{ height: '300px', width: '250px', margin: '15px 15px', textAlign: 'center' }}>
                        <IoMdSchool
                            size={hovered === 1 ? 250 : 200}
                            color='blue'
                            style={{ transition: 'all 0.3s' }}
                            onMouseEnter={() => this.iconSizeChange(1)}
                            onMouseLeave={() => this.setState({ hovered: "" })}
                        />
                        <h2 style={{ margin: 0 }}>College</h2>
                    </div>
                    <div style={{ height: '300px', width: '250px', margin: '15px 15px', textAlign: 'center' }}>
                        <FaPlusCircle
                            size={hovered === 2 ? 250 : 200}
                            color='rgb(132, 0, 0)'
                            style={{ backgroundColor: 'white', borderRadius: '50%', transition: 'all 0.3s' }}
                            onMouseEnter={() => this.iconSizeChange(2)}
                            onMouseLeave={() => this.setState({ hovered: "" })}
                        />
                        <h2 style={{ margin: 0 }}>Extras</h2>
                    </div>
                </div>
                <Drawer anchor="right" open={right} onClose={this.toggleDrawer('right', false)}>
                    <div
                        onClick={this.toggleDrawer('right', false)}
                        onKeyDown={this.toggleDrawer('right', false)}
                        style={{ width: width < 650 ? width : width * .75 }}
                    >
                        <HighSchoolInfo width={width} />
                    </div>
                </Drawer>
            </div>
        )
    }

}

const styles = {
    slide: {
        padding: 15,
        color: '#fff',
    },
    slide2: {
        backgroundColor: 'rgb(10, 0, 153)',
    },
};

export default Education;