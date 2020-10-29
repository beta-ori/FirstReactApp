import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Card, CardBody, Spinner} from 'reactstrap';
import {Link} from 'react-router-dom';
import Event from './Event';
import axios from 'axios';

function Events(props) {

    const [topEvents, setTopEvents] = useState([]);
    
    const [events, setEvents] = useState([]);

    console.log(props.filterby)

    useEffect(() => {

        document.title = 'Omi Live';

        axios.get('https://app.omihdlive24.com/posts')
        .then((response) => {
            setTopEvents(response.data);

            if(props.filterby  == 'home')
            {   
                setEvents(response.data);
            }
            
            else if(props.category == 'category')
            {
                const data = response.data.filter( item => {
                    return item.category == props.filterby;
                })
               
                setEvents(data);
            }
            else{
                const data = response.data.filter( item => {
                    return item.cust_url == props.filterby;
                })

                document.title = data[0].title;
               
                setEvents(data);
            }

            //console.log(response);
        })
        .catch((error) => {
            // handle error
            console.log(error);
        })
    }, [props.filterby]);

    const categories = ['Sports', 'Soccer', 'Football', 'NHL', 'NFL', 'Tennis', 'UFC', 'Events'];
    

    return (
        <>
            <Container style={{marginTop: '80px', marginBottom: '40px', minHeight: '100vh'}}>
                <Row>
                    <Col md='8'>
                       {
                           events == []? 
                           <div style={styles.spinnerRoot}>
                               <Spinner type="border" style={styles.spinner} color="info"/>
                           </div>
                           :
                            events.map((event, key) => {
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

const styles = {

    spinnerRoot: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    spinner: {
        width: 50,
        height: 50,
        margin: 10
    }
}

export default Events;
