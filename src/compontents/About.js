import React from 'react';
import {Container} from 'reactstrap';
import axios from 'axios';

function About(props) {
    document.title = 'About Page';

    console.log(props);

    axios.get('http://localhost:4444/posts')
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });

    return (
        <>
            <Container style={{marginTop: '80px'}}>
                <div>
                    <h1>About Page</h1>    
                </div>
            </Container>
        </>
    )
}

export default About
