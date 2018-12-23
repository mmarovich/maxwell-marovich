import React, { Component } from 'react';

import { QuotesModal } from './modals';

const About = (props) => {
  return (
    <div style={{ backgroundColor: 'rgba(150,150,150,1)', padding: '10px', width: '100%' }}>
      <h1 style={{ margin: 0, textAlign: 'center' }}>Hello</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around' }}>
        <div style={styles.aboutContainer}>
          <QuotesModal view={props.view} />
        </div>
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
    width: '320px', 
    backgroundColor: 'green'
  }
}

export default About;