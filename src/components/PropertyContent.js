import React, { Component } from 'react';
import MyMap from './MyMap'

class Content extends Component {
    constructor(props){
        super(props)
    }

  
    
    render() {
        return (
            <div className='master-detail-element detail'>
                <div id="mapid">
                    <MyMap/>
                </div>
            </div>
        );
    }
}

export default Content;
