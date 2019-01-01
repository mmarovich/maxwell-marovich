import React from 'react';
import LazyLoad from 'react-lazyload';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import AboutHeader from './Header';

const About = ({ view, handleModal }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(25,25,25,1)',
      padding: '10px',
      width: '100%',
      height: view.width > 996 ? view.height : null
    }}>
      <AboutHeader />
      <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around' }}>
        <LazyLoad height='100%' unmountIfInvisible={true} >
          <Fade left>
            <div onClick={handleModal} style={styles.quotesContainer}>
              <h1 style={{ color: 'white', fontSize: '50px', lineHeight: '80px' }}>Sayings To Live By</h1>
            </div>
          </Fade>
        </LazyLoad>
        <LazyLoad height='100%' unmountIfInvisible={true} >
          <Fade bottom>
            <Link to='/resume'>
            <div style={styles.aboutContainer}>

            </div>
            </Link>
          </Fade>
        </LazyLoad>
        <div style={styles.aboutContainer}>

        </div>

      </div>
    </div>
  )
}

const styles = {
  aboutContainer: {
    margin: '20px 20px',
    height: '400px',
    width: '300px',
    backgroundColor: 'red'
  },
  quotesContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: '20px 20px',
    height: '400px',
    width: '300px',
    backgroundColor: 'rgba(50,50,50,1)',
    backgroundImage: `url(${require(`../../../assets/images/quotes.png`)})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    cursor: 'pointer',
  }
}

export default About;