import React from 'react'
import FlatCard from './FlatCard'
import bot1 from '../../images/bot1.png'
import bot2 from '../../images/bot2.png'
import bot3 from '../../images/bot3.png'

function FlatCards() {
    const flats = [
        {
            name: "Flat in North Goa",
            img: bot3,
            description: "Goan Studio Near Vagator Beach.",
            discountedPrice: 49.99,
            originalPrice: 79.99,
            beds:'2 beds'
        },
        {
            name: "Flat in Arambol",
            img: bot2,
            description: "Studio Apartment.",
            discountedPrice: 129.99,
            originalPrice: 199.99,
            beds:'2 beds'
        },
        {
            name: "Flat in stay in Siolim",
            img: bot1,
            description: "Jenny's Home.",
            discountedPrice: 19.99,
            originalPrice: 29.99,
            beds:'2 beds'
        }
    ]
    return (
        <div className='sm:py-6 py-3 flex flex-col sm:flex-row items-center justify-center gap-5'>
            {flats.map((room)=>(
                <FlatCard img={room.img} beds={room.beds} name={room.name} description={room.description} discountedPrice={room.discountedPrice} originalPrice={room.originalPrice}/>
            ))}
            {/* <FlatCard img={flats[0].img} beds={flats[0].beds} name={flats[0].name} description={flats[0].description} discountedPrice={flats[0].discountedPrice} originalPrice={flats[0].originalPrice}/> */}
        </div>
    )
}

export default FlatCards