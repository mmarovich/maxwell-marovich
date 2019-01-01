import React from 'react';
import {FaSchool, FaPlusCircle} from 'react-icons/fa';
import {IoMdSchool} from 'react-icons/io';

const Education = () => {

    return (
        <div style={{...styles.slide, ...styles.slide2}} >
            <h1 style={{textAlign: 'center'}}>Education</h1>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
                <div style={{height: '300px', width: '200px', margin: '15px 15px'}}>
                    <FaSchool size={200} color='blue' />
                    <h2 style={{textAlign: 'center'}}>High School</h2>
                </div>
                <div style={{height: '300px', width: '200px', margin: '15px 15px'}}>
                    <IoMdSchool size={200} color='blue' />
                    <h2 style={{textAlign: 'center'}}>College</h2>
                </div>
                <div style={{height: '300px', width: '200px', margin: '15px 15px'}}>
                    <FaPlusCircle size={200} color='red' style={{backgroundColor: 'white', borderRadius: '50%'}} />
                    <h2 style={{textAlign: 'center'}}>Extras</h2>
                </div>            
            </div>
        </div>
    )
}

const styles = {
    slide: {
        padding: 15,
        minHeight: 100,
        color: '#fff',
    },
    slide2: {
        backgroundColor: '#B3DC4A',
    },
};

export default Education;