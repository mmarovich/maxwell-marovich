import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { MdPerson, MdSchool, MdWork } from "react-icons/md";

const ResumeTabs = ({ index, handleChange, classes, width }) => (
    <Tabs value={index} 
        fullWidth
        onChange={handleChange} 
        style={styles.tabs} 
        classes={{ indicator: classes.indicator }}>
        <Tab 
            label={width < 600 ? <MdPerson size={30} color={index === 0 ? 'white' : 'black'} /> : "About"} 
            style={{
                backgroundColor: index === 0 ? 'rgb(132, 0, 0)' : 'white',
                color: index === 0 ? 'white' : 'black',
                fontWeight: 'bold'
        }} />
        <Tab label={width < 600 ? <MdSchool size={30} color={index === 1 ? 'white' : 'black'} /> : "Education"}
            style={{
                backgroundColor: index === 1 ? 'rgb(10, 0, 153)' : 'white',
                color: index === 1 ? 'white' : 'black',
                fontWeight: 'bold'
        }} />
        <Tab label={width < 600 ? <MdWork size={30} color={index === 2 ? 'white' : 'black'} /> : "Work"}
            style={{
                backgroundColor: index === 2 ? 'rgb(106, 192, 255)' : 'white',
                color: index === 2 ? 'white' : 'black',
                fontWeight: 'bold'
        }} />
    </Tabs>
)

const styles = {
    tabs: {
        background: '#fff',
        margin: '0 70px 0 0'
    },
    indicator: {
        backgroundColor: 'black'
    }
}


export default withStyles(styles)(ResumeTabs);