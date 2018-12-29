import React from 'react';
import Typing from 'react-typing-animation';
import LazyLoad from 'react-lazyload';

const AboutHeader = (props) => {
    return (
        <div style={{height: '150px', position: 'relative'}}>
            <LazyLoad
                throttle={true}
                unmountIfInvisible={true}
                offset={[0, 200]}
                height='100%'
            >
                <Typing
                    startDelay={2000}
                >
                    <div style={{ height: '150px' }}>
                        <h1 style={{ textAlign: 'center', margin: 0 }}>I'm assuming you might want to know</h1>
                        <Typing.Delay ms={1000} />
                        <h1 style={{ textAlign: 'center', margin: 0 }}>a little about me...</h1>
                    </div>
                </Typing>
            </LazyLoad>
        </div>
    )
}

export default AboutHeader;