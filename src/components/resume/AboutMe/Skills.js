import React, { Component } from 'react';
import { Line, Circle } from 'rc-progress';
import { FaHtml5, FaReact, FaDatabase } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoNodejs, IoMdLeaf } from 'react-icons/io'

import skills from './skillsList';

class Skills extends Component {
    constructor(props) {
        super(props);

        this.state = {
            skills: []
        }
    }

    componentDidMount() {
        this.setState({skills})
    }

    renderSkills = () => {
        return this.state.skills.map((skill, i) => {
            let logo;
            switch(skill.skill) {
                case 'HTML/CSS':
                    logo = <FaHtml5 size={80} color='red' />
                    break;
                case 'Javascript':
                    logo = <IoLogoJavascript size={80} color='red' />
                    break;
                case 'Node.js':
                    logo = <IoLogoNodejs size={80} color='red' />
                    break;
                case 'React.js':
                    logo = <FaReact size={80} color='red' />
                    break;
                case 'mySQL':
                    logo = <FaDatabase size={80} color='red' />
                    break;
                case 'MongoDB':
                    logo = <IoMdLeaf size={80} color='red' />
                    break;
                default:
                    logo = null;
            }
            return <div key={i} style={{ width: '100px', margin: '15px 15px', textAlign: 'center'}}>
                {logo}
                <h3>{skill.skill}</h3>
                <Line 
                    percent={skill.level} 
                    strokeWidth="15" 
                    strokeColor="yellow" 
                    trailWidth="10"    
                />
            </div>
        })
    }

    render() {
        return(
            <div style={{display: 'flex', flex: 1, flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
                {this.renderSkills()}
            </div>
        )
    }
}

export default Skills;