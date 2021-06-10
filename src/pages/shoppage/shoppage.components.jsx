import React from 'react';
import {Collections} from "../../components/collections/collections.components";
import './shoppage.styles.scss'

export class ShopPage extends React.Component {
    render() {
        return (
            <div className='shoppage'>
                <Collections  />
            </div>
        );
    }
}