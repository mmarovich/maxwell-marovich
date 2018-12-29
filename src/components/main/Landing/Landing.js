import React from 'react';

import NameText from './NameText';
import Background from '../../../assets/images/Max.png';

const Landing = ({view}) => {

  return (
    <div style={{
      display: 'flex',
      height: view.height,
      width: view.width > 965 ? 965 : view.width,
      margin: 'auto',
      position: 'relative'
    }}>
      <div style={{
        flex: 1,
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
        <NameText />
      </div>
    </div>
  )
}

export default Landing;