import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { FaLink } from "react-icons/fa";

class College extends Component {
    constructor(props) {
        super(props)

        this.state = {
            expanded: false
        }
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };


    render() {
        const { college } = this.props;
        return (
            <Card style={{ width: 400, margin: '20px', maxHeight: !this.state.expanded ? '506px' : null }}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="KSC logo">
                            <img src={college.logo} style={{height: '100%'}} />
                        </Avatar>
                    }
                    title={college.name}
                    subheader={college.date}
                />
                <CardMedia
                    style={{minHeight: '250px'}}
                    image={college.pic}
                    title={college.name}
                />
                <CardContent>
                    <Typography component="p">
                        {college.description}
                </Typography>
                </CardContent>
                <CardActions disableActionSpacing>
                    <FaLink size={20} color="blue" />
                    <IconButton
                        style={this.state.expanded ? styles.expandOpen : styles.expand}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        { college.more ? 
                            college.more.map((more, i) => {
                                return (
                                    <div key={i}>
                                        <img style={{width: '100%'}} src={more.pic} />
                                        <Typography paragraph>
                                            {more.description}
                                        </Typography>
                                    </div>
                                )
                            }) : null
                        }
                    </CardContent>
                </Collapse>
            </Card>
        )
    }
}

const styles = theme => ({
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
})

export default withStyles(styles)(College);