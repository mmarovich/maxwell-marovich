import React from 'react';
import { IoLogoGithub, IoLogoLinkedin, IoIosMail } from 'react-icons/io'

import Skills from './Skills';

const AboutMe = ({ width, height }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#FEA900', padding: 15, color: '#fff',
            height: width > 550 ? height - 48 : null }}>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            }} >
                <div style={{ display: 'flex', flex: 1, padding: '0 10px', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                        src={require(`../../../assets/images/MaxAbout.jpeg`)}
                        alt="It's Maxwell Marovich.  He's super handsome!"
                        style={{ height: '100%', width: '100%', minWidth: '200px', maxWidth: '280px', borderRadius: '50%' }} />
                </div>
                <div style={styles.info}>
                    <h1>Maxwell Marovich</h1>
                    <div style={{ display: 'flex', justifyContent: 'space-around', width: width > 550 ? '25%' : '100%' }}>
                        <a target="_blank" rel="noopener noreferrer" href='mailto:mmarovich@gmail.com'>
                            <IoIosMail size={40} color="black" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href='https://github.com/mmarovich'>
                            <IoLogoGithub size={40} color="black" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/mmarovich/'>
                            <IoLogoLinkedin size={40} color="black" />
                        </a>
                    </div>
                    <h2 style={{ marginBottom: 0 }}>Fullstack Web Developer</h2>
                    <p style={{ textAlign: 'center', margin: 0 }}>"We are professional googlers.  It's still dumbfounding how many people still don't know how to google."</p>
                </div>
            </div>
            <Skills />
        </div>

    )
}

const styles = {
    info: {
        display: 'flex',
        flexDirection: 'column',
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 10px',
        minWidth: '300px'
    },
};

export default AboutMe;