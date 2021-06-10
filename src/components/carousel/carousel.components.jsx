import React from "react";
import {CarouselItem} from "../carousel-item/carousel-item.components";
import './carousel.styles.scss'

export function Carousel(props) {
    return (
        <div className='carousel-frame'>
            <div className='carousel-title'>{props.showtitle ? <h2>{props.title}</h2> : null}</div>
            <div className='carousel'>
                {props.items.map(({id, name, imageUrl, price}) => (
                    <CarouselItem key={id} name={name} imageUrl={imageUrl} price={price}/>
                )
            )}
            </div>
        </div>
    );
}