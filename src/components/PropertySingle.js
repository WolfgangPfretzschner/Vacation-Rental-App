import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProperties } from "../actions/index";
import { withFirestore, firebaseConnect, isEmpty } from "react-redux-firebase";

const mapState = (state, ownProps) => {
   let property = {};
   let idCurrent = ownProps.match.params.id
   console.log("%c curr id 1","color:red;font-size:18px",idCurrent)
   if (state.firestore.ordered.properties && state.firestore.ordered.properties.length > 0) {
      console.log("%cfilter start 2","color:red;font-size:18px",)
      property = state.firestore.ordered.properties.find( prop => prop.id === idCurrent);
      console.log("%c  state  3","color:blue;font-size:18px",property)
      }else{
         console.log("%cno state yet 4","color:red;font-size:18px",)
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
   async componentDidMount() {
      const { firestore, match} = this.props;
      console.log("%c did mount 5","color:red;font-size:18px",)
      let property = await firestore.get(`properties/${match.params.id}`);
      console.log("%c set  prop 6","color:red;font-size:18px",property)
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
