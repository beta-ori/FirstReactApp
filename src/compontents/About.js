import React from 'react';
import {Container} from 'reactstrap';


function About() {
    document.title = 'About Page';

    const firstStyle = {
        height: '100vh',
        textAlign: 'center',
        paddingTop: '100px'
    };

    return (
        <>
            <Container style={firstStyle}>
                <div>
                    <h1>About Page</h1>    
                </div>
            </Container>
        </>
    )
}

export default About
