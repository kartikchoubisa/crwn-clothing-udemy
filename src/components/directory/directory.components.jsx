import React from 'react';
import {sections as sections_list} from "./directory.data.js";
import {MenuItem} from "../menu-item/menu-item.components";
import './directory.styles.scss'

export class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: sections_list,
        }
    }

    render() {
        return(
            <div className = 'directory-menu'>
                {this.state.sections.map(({title, imageUrl, id}) => (
                <MenuItem key = {id} title = {title}/>)
                )}
            </div>
        )
    }

}
