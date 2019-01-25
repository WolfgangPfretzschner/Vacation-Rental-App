import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { compose } from 'redux'
import PropertyCard from "./PropertyCard";
// import { fetchProperties } from "../actions/index";
import { firestoreConnect, withFirestore } from "react-redux-firebase";
import { Card } from "semantic-ui-react";
import PropertSearchForm from '../features/propertySearch/PropertySearchForm'

class PropertiesList extends Component {
   // componentDidMount() {
   //    this.props.fetchProps();
   // }
 
   renderList = () => {
      
      if (this.props.properties && typeof this.props.search == 'string') {
         return  <div style={{paddingLeft:"20px"}}> <h3> No Properties found for the search</h3></div> ;
         };
      
      if (this.props.properties && this.props.search.length == []) {
         return this.props.properties.map(prop => {
            return <PropertyCard prop={prop} key={prop.id} name={prop.name} />;
         });
      } else {
         return this.props.search.map(prop => {
            return <PropertyCard prop={prop} key={prop.id} name={prop.name} />;
         });
      }
   };

   render() {
    
      return  <div>
            <div >
               <PropertSearchForm folded={false} />
            </div>
            <div style={{paddingTop: '20px'}}>
            <Card.Group>{this.renderList()}</Card.Group>
            </div>
            </div>
   }
}

function mapStateToProps(state) {
   return {
      properties: state.firestore.ordered.properties,
      search: state.search
   };
}
// function mapDispatchToProps(dispatch) {
//    return {
//       fetchProps: () => dispatch(fetchProperties())
//    };
// }
export default compose( 
  // withFirestore,
  connect( mapStateToProps,null),
  // firestoreConnect([{ collection: "properties" }])
)(PropertiesList);