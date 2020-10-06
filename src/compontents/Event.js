import React from 'react'
import {Card, CardBody, CardText, Button} from 'reactstrap';
import {Link} from 'react-router-dom';




function Event({event}) {

    return (
        <>
            <Card style={{marginBottom: '30px'}}>  
                <CardBody>
                    <Link to={ '/' + event.category.toLowerCase() + '/' + event.cust_url} style={{textDecoration:'none'}}>
                        <h3>{event.title}</h3>
                    </Link>
                    <h6>{'Date ' + event.date + ' UTC'}</h6>
                    <a href={event.target_url}>
                        <Button>Go Live</Button>
                        <img src={process.env.PUBLIC_URL + '/img/live.png'} alt="Live" style={styles.liveimg}/>
                    </a>
                    <a href={event.target_url}>
                        <img src={'https://app.omihdlive24.com/uploads/'+event.img} style={styles.img} atl={ event.img }/>
                    </a>
                    <CardText>{event.description}</CardText>
                </CardBody> 
            </Card>
        </>
    )
}

const styles = {
    img:{
        width: '100%',
        height: '70%',
        marginTop: '20px',
        marginBottom: '20px'
    },
    goLiveBig:{
        position: 'absolute',
        right: '20px',
        top: '50px',
    },

    goLiveSmall:{
        position: 'relative',
    },

    liveimg:{
        width: '120px',
        height: '70px',
    }
}

export default Event
