import React, { Component, Fragment } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

import educations from './more_info';
import More from './More';

class MoreList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            educations: []
        }
    }

    componentDidMount() {
        this.setState({educations})
    }

    renderMore() {
        return this.state.educations.map((education, i, arr) => {
            return <More education={education} index={i} lastItem={arr.length} key={i} width={this.props.width} />
        })
    }


    render() {
        return (
            <Fragment>
                <div style={{ width: '100%', textAlign: 'right' }}>
                    <IconButton
                        style={{ marginRight: '16px' }}
                        onClick={this.props.toggleDrawer('left', false)}
                        aria-expanded={this.props.left}
                        aria-label="Show more"
                    >
                        <ChevronLeft />
                    </IconButton>
                </div>
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9) ), url(${require(`../../../../../assets/images/pedigree-of-man.jpg`)})`,
                    backgroundAttachment: 'fixed',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                }}>
                    {this.renderMore()}
                </div>
            </Fragment>
        )
    }

}

export default MoreList;