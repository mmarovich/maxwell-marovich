import React from 'react';
import Typing from 'react-typing-animation';
import LazyLoad from 'react-lazyload';

const AboutHeader = (props) => {
    return (
        <LazyLoad
            debounce={true}
            unmountIfInvisible={true}
        >
            <Typing>
                <h1 style={{textAlign: 'center'}}>I'm assuming you might want to know a little about me...</h1>
            </Typing>
        </LazyLoad>
    )
}

export default AboutHeader;