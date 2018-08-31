import React, { Component, Fragment } from 'react';
import Search from './Search'
import PropertySidebar from './PropertiesSidebar';
import PropertyContent from './PropertyContent';



class PropertiesContainer extends Component {
    constructor(props) {
        super(props);

    }



    render(){
        return (
            <Fragment>
                <Search/>
                <div className='container'>
                    <PropertyContent />
                    <PropertySidebar /> 
                </div>
            </Fragment>
        )
    } 
}

export default PropertiesContainer;
