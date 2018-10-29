import React, { Component } from 'react';

class About extends Component {

  render() {
    return (
      <div style={{ backgroundColor: 'rgba(150,150,150,1)', padding: '10px', width: '100%' }}>
        <h1 style={{ margin: 0, textAlign: 'center' }}>Hello</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around' }}>
          <div style={{ margin: '20px 10px', height: '400px', width: '320px', backgroundColor: 'green' }}>

          </div>
          <div style={{ margin: '20px 10px', height: '400px', width: '320px', backgroundColor: 'green' }}>

          </div>
          <div style={{ margin: '20px 10px', height: '400px', width: '320px', backgroundColor: 'green' }}>

          </div>

        </div>
      </div>
    )
  }
}

export default About;