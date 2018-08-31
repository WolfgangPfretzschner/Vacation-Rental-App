import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropertyCard from './PropertyCard';
import { fetchProperties } from '../actions/index'
import { firestoreConnect } from 'react-redux-firebase';

class PropertiesList extends Component {
    state = {props:'test'}
    componentDidMount(){
        this.props.fetchProps()
    }

    renderList = () => {
        if(!this.props.properties){
            return (
                <li>
                    no props yet
                </li>
            )
        }else{
            return this.props.properties.map(prop => {
                return (
                    <li>
                        <PropertyCard  prop={prop} key={prop.id}/>
                    </li>
                );
            });
        }
    }

    render(){
        console.log("%cprops","color:green;font-size:18px",this.props.properties)
        console.log("%cstate","color:green;font-size:18px",this.state)
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        properties:state.firestore.ordered.properties
    }
}
function mapDispatchToProps(dispatch) {
    return { 
        fetchProps: () => dispatch(fetchProperties()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(
        firestoreConnect([{ collection: 'properties' }])(PropertiesList)
);
