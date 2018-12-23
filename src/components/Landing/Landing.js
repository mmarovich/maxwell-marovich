import React, {Component} from 'react';

import NameText from './NameText';
import Background from '../../assets/images/Max.png';

class Landing extends Component {

  render() {
    return(
      <div style={{
        display: 'flex',
        height: this.props.view.height,
        width: this.props.view.width > 965 ? 965 : this.props.view.width,
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
}

export default Landing;