import React from "react";
import {SHOP_DATA} from "./shop-data.data";
import {Carousel} from "../carousel/carousel.components";
import './collections.styles.scss'


export class Collections extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shopData: SHOP_DATA,
        }
    }


    render() {
        return (
            <div className='collections'>
                {this.state.shopData.map( ({id, title,routeName,items}) => (
                    <Carousel key = {id} showtitle={true} title={title} routeName={routeName} items={items} />
                ))

                }
            </div>
        )
    }
}