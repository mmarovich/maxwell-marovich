import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const ResumeTabs = ({index, handleChange}) => (
    <Tabs value={index} fullWidth onChange={handleChange} style={styles.tabs}>
        <Tab label="About" />
        <Tab label="Education" />
        <Tab label="Work" />
    </Tabs>
)

const styles = {
    tabs: {
        background: '#fff',
        margin: '0 70px 0 0'
    },
}

export default ResumeTabs;