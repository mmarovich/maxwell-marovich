import React from 'react'

const More = ({ education, index, lastItem, width }) => {
    return (
        <div style={{
            width: '100%',
            marginBottom: lastItem === index + 1 ? '0' : '75px',
            background: 'rgba(238, 242, 243, .97)',
                background: '-webkit-linear-gradient(to right, rgba(238, 242, 243, .97), rgba(142, 158, 171, .97))',
                background: 'linear-gradient(to right, rgba(238, 242, 243, .97), rgba(142, 158, 171, .97))',
        }}>
            <div style={{ width: '100%', height: '200px', margin: '20px 0' }} >
                <a href={education.link} target="_blank">
                    <img src={education.logo} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </a>
            </div>
            <div>
                <div style={{ width: width < 600 ? '100%' : '50%', display: 'inline-block' }}>
                    <a href={education.link} target="_blank" style={{textDecoration: 'none', color: 'black'}}>
                        <h4 style={{ textAlign: width < 600 ? 'center' : 'left', margin: 0, padding: '0 30px' }}>{education.name}</h4>
                    </a>
                </div>
                <div style={{ width: width < 600 ? '100%' : '50%', display: 'inline-block' }}>
                    <h4 style={{ textAlign: width < 600 ? 'center' : 'right', margin: 0, padding: '0 30px' }}>{education.date}</h4>
                </div>
            </div>
            <div style={{
                margin: '50px', 
                padding: '10px', 
                background: '#8e9eab',
                background: '-webkit-linear-gradient(to right, #8e9eab, #eef2f3)',
                background: 'linear-gradient(to right, #8e9eab, #eef2f3)',
                borderRadius: 20
            }}>
                {education.description}
            </div>
        </div>
    )
}

export default More;