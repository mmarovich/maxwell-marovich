import React from 'react';
import LazyLoad from 'react-lazyload';
import Fade from 'react-reveal/Fade';

import AboutHeader from './Header';
import { QuotesModal } from './modals';

const About = (props) => {
  return (
    <div style={{ backgroundColor: 'rgba(25,25,25,1)', padding: '10px', width: '100%' }}>
      <AboutHeader />
      <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around' }}>
        <LazyLoad unmountIfInvisible={true} >
          <Fade left>
            <div style={styles.aboutContainer}>
              <QuotesModal view={props.view} />
            </div>
          </Fade>
        </LazyLoad>
        <div style={styles.aboutContainer}>

        </div>
        <div style={styles.aboutContainer}>

        </div>

      </div>
    </div>
  )
}

const styles = {
  aboutContainer: {
    margin: '20px 10px',
    height: '400px',
    width: '400px'
  }
}

export default About;