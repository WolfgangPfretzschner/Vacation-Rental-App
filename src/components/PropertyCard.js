import React, { Component, Fragment } from 'react'
import MySlider from './MySlider'


class PropertytCard extends Component {
    constructor(props) {
        super(props)
     
        
    };

    render() {
        console.log("%cprops in card","color:blue;font-size:18px",this.props)
        return (
            <li >
            <h4>{this.props.prop.name}</h4>
            <img src={this.props.prop.primaryUrl} alt="Smiley face" height="150" width="150" />
            </li>
        )
    }
}

export default PropertytCard
