import React from 'react';
import {Container} from 'reactstrap';

function Contact() {
    document.title = 'Contact Page';

    const firstStyle = {
        height: '100vh',
        textAlign: 'center',
        paddingTop: '100px'
    };


    return (
        <>
            <Container>
                <div style={firstStyle}>
                    <h1>Contact Page</h1>    
                </div>
            </Container>
        </>
    )
}

export default Contact
