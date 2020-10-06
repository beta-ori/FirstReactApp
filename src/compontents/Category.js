import React, {useEffect, useState} from 'react';
import Events from './Events';
import axios from 'axios'

function Category(props) {
    
    console.log(props.match.params.cat);

    const [events, setEvents] = useState([]);

    useEffect(() => {
        document.title = 'Home Page';

        axios.get('https://app.omihdlive24.com/category/' + props.match.params.cat)
        .then((response) => {
            setEvents(response.data);
            //console.log(response);
        })
        .catch((error) => {
            // handle error
            console.log(error);
        })
    }, [props.match.params.cat]);

    // const events = [
    //     {
    //         title: 'Barcelona vs Real',
    //         category: 'Soccer',
    //         date: '12.00 AM',
    //         description: "The 2020 Speedway Grand Prix season is the 26th period of the Speedway Grand Prix time, and will choose the 75th FIM Speedway World Championship. It is the twentieth arrangement under the advancement of Benfield Sports International, an IMG organization. Another focuses framework has been presented with generally positions choosing the quantity of title focuses a rider will score from a Grand Prix (GP) and focuses scored in every individual warmth used to decide a rider's advancement in a GP.",
    //         img: 'maniquin.png',
    //     },
    // ]

    return (
        <>
            <Events events={events} />
        </>
    )
}



export default Category;
