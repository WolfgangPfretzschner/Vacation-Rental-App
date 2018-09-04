import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropertyCard from "./PropertyCard";
import { fetchProperties } from "../actions/index";
import { firestoreConnect } from "react-redux-firebase";

class PropertiesList extends Component {
   componentDidMount() {
      this.props.fetchProps();
   }

   renderList = () => {
      if (!this.props.properties) {
         return <li>no props yet</li>;
      } else {
         return this.props.properties.map(prop => {
            return <PropertyCard prop={prop} key={prop.id} />;
         });
      }
   };

   render() {
      return <Fragment>{this.renderList()}</Fragment>;
   }
}

function mapStateToProps(state) {
   return {
      properties: state.firestore.ordered.properties
   };
}
function mapDispatchToProps(dispatch) {
   return {
      fetchProps: () => dispatch(fetchProperties())
   };
}
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(firestoreConnect([{ collection: "properties" }])(PropertiesList));
