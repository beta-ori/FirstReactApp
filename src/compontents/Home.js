import React from 'react';
import Events from './Events';


function Home() {

    /*const events = [
        {
            title: 'Soccer',
            start: '12.00 AM',
            description: "The 2020 Speedway Grand Prix season is the 26th period of the Speedway Grand Prix time, and will choose the 75th FIM Speedway World Championship. It is the twentieth arrangement under the advancement of Benfield Sports International, an IMG organization. Another focuses framework has been presented with generally positions choosing the quantity of title focuses a rider will score from a Grand Prix (GP) and focuses scored in every individual warmth used to decide a rider's advancement in a GP.",
            img: 'maniquin.png'
        },
        {
            title: 'Football',
            start: '11.00 AM',
            description: "The 2020 Speedway Grand Prix season is the 26th period of the Speedway Grand Prix time, and will choose the 75th FIM Speedway World Championship. It is the twentieth arrangement under the advancement of Benfield Sports International, an IMG organization. Another focuses framework has been presented with generally positions choosing the quantity of title focuses a rider will score from a Grand Prix (GP) and focuses scored in every individual warmth used to decide a rider's advancement in a GP.",
            img: 'maniquin.png'
        }
    ]*/
    return (
        <>
            <Events filterby={'home'} />
        </>
    )
}


export default Home;
