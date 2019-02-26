import React, { Component, Fragment } from 'react';
import College from './College';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import colleges from './college_info';

class CollegeList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            colleges: [],
            expanded: false,
        }
    }

    componentDidMount() {
        this.setState({ colleges: colleges })
    }

    renderColleges = () => {
        return this.state.colleges.map((college, i) => {
            return <College college={college} key={i} width={this.props.width} />
        })
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        return (
            <Fragment>
                <div style={{width: '100%', textAlign: 'right'}}>
                    <IconButton
                        style={{marginRight: '16px'}}
                        onClick={this.props.toggleDrawer('bottom', false)}
                        aria-expanded={this.props.bottom}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'top', flexWrap: 'wrap'}}>
                    {this.state.colleges ? this.renderColleges() : null}
                </div>
            </Fragment>
        )
    }
}

export default CollegeList;