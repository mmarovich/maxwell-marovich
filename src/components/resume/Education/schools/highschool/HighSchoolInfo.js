import React, { Fragment } from 'react';
import hs_pics from './hs_pics'


const renderPics = (width) => {
    return hs_pics.map((pic, i) => {
        return (
            <div key={i}>
                <img style={{ width: '300px', margin: '30px 20px 5px 20px' }} src={pic.image} />
                <p style={{ textAlign: 'center', margin: '0 20px', maxWidth: '300px' }}>{pic.description}</p>
            </div>
        )
    })
}

const HighSchoolInfo = ({ school, width }) => {

    return (
        <Fragment>
            <div style={{ width: '100%' }}>
                <div style={{textAlign: 'center'}}>
                    <h2 style={{margin: 0}}>Thornwood High School</h2>
                    <img style={{width: '100%'}} src={require(`../../../../../assets/images/TW_logo.png`)} />
                    <h3 style={{margin: 0}}>Graduated: 2000</h3>
                </div>
                <div style={styles.imagesContainer}>
                    {renderPics(width)}
                </div>

            </div>
        </Fragment>
    )
}

const styles = {
    imagesContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap'
    }
}

export default HighSchoolInfo;