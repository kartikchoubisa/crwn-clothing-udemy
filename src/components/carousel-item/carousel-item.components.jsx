import React from "react";
import './carousel-item.styles.scss'

export const CarouselItem = (props) => (
    <div className='carousel-item'>


        <div className='background-image'
            style={
                {backgroundImage: `url('${props.imageUrl}')`}
            }
        />

        <div className= 'content'>
            <h3 className='title'>{props.name}</h3>
            <h2 className='price'>{props.price}</h2>
        </div>

    </div>
)