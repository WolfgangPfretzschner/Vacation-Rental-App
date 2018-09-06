import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProperties } from "../actions/index";
import { withFirestore, firebaseConnect, isEmpty } from "react-redux-firebase";

const mapState = (state, ownProps) => {
   let property = {};
   let idCurrent = ownProps.match.params.id
   if (state.firestore.ordered.properties && state.firestore.ordered.properties.length > 0) {
      property = state.firestore.ordered.properties.find(prop => prop.id === idCurrent);
   } else {
   }
   return {
      property,
      // auth: state.firebase.auth
   };
};

const actions = {
   fetchProperties
}

class SingleProperty extends Component {
   componentDidMount() {
      debugger
      const { firestore, match} = this.props;
      let property = firestore.get(`properties/${match.params.id}`);
      // debugger
   }

   // async componentWillUnmount() {
   //    const { firestore, match } = this.props;
   //    await firestore.unsetListener(`properties/${match.params.id}`);
   // }

   render() {
      // debugger
      console.log("%c render 7","color:red;font-size:18px",this.props, this.state)
      const { property } = this.props;
      return (
         <div>
            <h1>{property.name}</h1>
            <img src={property.primaryUrl}/>
         </div>
      );
   }
}

export default withFirestore(connect(mapState, actions )(SingleProperty));


// let query = propertiesRef.where('title'  )