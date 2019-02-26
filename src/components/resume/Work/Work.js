import React from 'react';

import {CNAButton} from './jobs/CNA';

const Work = () => {

    return (
        <div style={{...styles.slide, ...styles.slide3}} >
            <h1>Work</h1>

            <CNAButton />

        </div>
    )
}

const styles = {
    slide: {
        padding: 15,
        minHeight: 100,
        color: '#fff',
    },
    slide3: {
        backgroundColor: '#6AC0FF',
    },
};

export default Work;