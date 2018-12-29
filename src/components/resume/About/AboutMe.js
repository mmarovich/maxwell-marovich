import React from 'react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'

const AboutMe = () => {

    return (
        <div style={{...styles.slide, ...styles.slide1}} >
            <div style={{display: 'flex', flex: 1, padding: '0 10px', justifyContent: 'center'}}>
                <img 
                    src={require(`../../../assets/images/MaxAbout.jpeg`)} 
                    alt="It's Maxwell Marovich.  He's super handsome!" 
                    style={{height: '200px', borderRadius: '50%'}} />
            </div>
            <div style={styles.info}>
                <h1>Maxwell Marovich</h1>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%'}}>
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/mmarovich'>
                        <IoLogoGithub size={40} color="black" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/mmarovich/'>
                        <IoLogoLinkedin size={40} color="black" />
                    </a>
                    

                </div>
            </div>

        </div>
    )
}

const styles = {
    slide: {
        display: 'flex',
        flexWrap: 'wrap', 
        justifyContent: 'space-around',
        padding: 15,
        minHeight: 100,
        color: '#fff',
    },
    info: {
        display: 'flex', 
        flexDirection: 'column', 
        flex: 3, 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '0 10px',
        minWidth: '300px'
    },
    slide1: {
        backgroundColor: '#FEA900',
    },
};

export default AboutMe;