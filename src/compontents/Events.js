import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Card, CardBody, CardText, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import Event from './Event';
import axios from 'axios';

function Dummy(props) {

    const [topEvents, setEvents] = useState([]);

    useEffect(() => {
        document.title = 'Home Page';
        axios.get('https://app.omihdlive24.com/posts')
        .then((response) => {
            setEvents(response.data);
            //console.log(response);
        })
        .catch((error) => {
            // handle error
            console.log(error);
        })
    }, []);

    const categories = ['Sports', 'Soccer', 'Football', 'NHL', 'NFL', 'Tennis', 'UFC', 'Events'];
    

    return (
        <>
            <Container style={{marginTop: '80px', marginBottom: '40px'}}>
                <Row>
                    <Col md='8'>
                       {
                            props.events.map((event, key) => {
                                return <Event key={key} event={event} />
                            })
                       }
                    </Col>
                    <Col md="4">
                        <Card>  
                            <CardBody>
                                <h3>Top Events</h3>
                                {topEvents.map((item, key) => {
                                    return <div style={{marginTop: '10px'}} key={key}><Link to={'/' + item.category + '/' + item.cust_url} style={{textDecoration: 'none'}}> {item.title}</Link></div>
                                })}
                            </CardBody>
                        </Card>

                        <Card style={{marginTop: '10px'}}>  
                            <CardBody>
                                <h3>Categories</h3>
                                {categories.map((item, key) => {
                                    return <div style={{marginTop: '10px'}} key={key}><Link to={'/' + item.toLowerCase()} style={{textDecoration: 'none'}}> {item}</Link></div>
                                })}
                            </CardBody> 
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default Dummy;
