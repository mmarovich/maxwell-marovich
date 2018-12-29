import React from 'react';
import LazyLoad from 'react-lazyload';
import Fade from 'react-reveal/Fade';
import Link from 'react-router-dom/Link';


import AboutHeader from './Header';
import { QuotesModal } from './modals';

const About = ({view}) => {
  return (
    <div style={{ backgroundColor: 'rgba(25,25,25,1)', 
      padding: '10px', 
      width: '100%', 
      height: view.width > 996 ? view.height : null 
    }}>
      <AboutHeader />
      <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around' }}>
        <LazyLoad height='100%' unmountIfInvisible={true} >
          <Fade left>
            <div style={styles.aboutContainer}>
              <QuotesModal view={view} />
            </div>
          </Fade>
        </LazyLoad>
        <div style={styles.aboutContainer}>
          <Link to="/resume">
          <div style={{backgroundColor: 'red', height: '100%', width: '100%'}}></div>
          </Link>
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
    width: '300px',
  }
}

export default About;