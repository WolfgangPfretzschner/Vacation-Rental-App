/*global google*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { withRouter } from 'react-router-dom'
import { withFirestore } from "react-redux-firebase";
import Script from "react-load-script";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from "revalidate";
import { createEvent, updateEvent, cancelToggle, seedProperties } from "../eventActions";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";

import firebase from "../../../firebase";
import DateRPicker from "./../../../dateRangePicker/DateRangePicker";

const mapState = (state, ownProps) => {

   return {

      properties: state.firestore.ordered.properties,
      auth: state.firebase.auth
   };

}
      //   debugger


const actions = {
   createEvent,
   updateEvent,
   cancelToggle,
   seedProperties
};



const validate = combineValidators({
   title: isRequired({ message: "The event title is required" }),
   category: isRequired({ message: "Please provide a category" }),
   description: composeValidators(
      isRequired({ message: "Please enter a description" }),
      hasLengthGreaterThan(4)({
         message: "Description needs to be at least 5 characters"
      })
   )(),
   city: isRequired("city"),
   venue: isRequired("venue"),
   date: isRequired("date")
});

class EventForm extends Component {
 
   // async componentDidMount() {
   //    const { firestore, match } = this.props;
   //    await firestore.setListener(`bookings/`);
   //    await firestore.setListener(`properties/`);
   // }

   // async componentWillUnmount() {
   //    const { firestore, match } = this.props;
   //    await firestore.unsetListener(`bookings/`);
   //    await firestore.unsetListener(`properties/`);
   // }


   sampleHanlde = () => {
     this.props.seedProperties()
   }

   onFormSubmit = values => {
      
      const newValues = {...values, name:this.props.name}
      this.props.createEvent(newValues);
      this.props.history.push(`/profile/${this.props.auth.uid}`)

   };
   // selectorMaker = () => {
   //    return this.props.properties === undefined ?
   //    null :
   //    this.props.properties.map(prop =>{ return { key:prop.name, text: prop.name, value: prop.name } })
   //  }
  
   render() {
      
      const {
         invalid, 
         submitting,
         pristine,
         event,
         cancelToggle,
         loading,
         displayValues,
         name,
         dateRanges,
         folded,
         handleSubmit
      } = this.props;
      return (
         <Grid>
         
            <Grid.Column width={12}>
               {/* <Segment color='orange'  > */}
                  <Header sub color="teal" content="Create Booking" /> 
                  <Form onSubmit={handleSubmit(this.onFormSubmit) }>
                     {/* <Field
                        name="Property"
                        type="text"
                        component={SelectInput}
                        options={name}
                        placeholder="Select Property"
                     /> */}
                     <Field
                        name="name"
                        type="text"
                        component={TextArea}
                        rows={3}
                        placeholder="Any comments?"
                     />
                     <Header sub color="teal" content="Travel Dates" />

                     {/* <Field
                        name="checkin_date"
                        type="text"
                        component={DateInput}
                        dateFormat="YYYY-MM-DD HH:mm"
                        timeFormat="HH:mm"
                        //  showTimeSelect
                        placeholder="Checkin Date"
                     /> */}
                     <Field
                        name="checkout_date"
                        type="text"
                        component={DateRPicker}
                        dateFormat="YYYY-MM-DD HH:mm"
                        timeFormat="HH:mm"
                        //  showTimeSelect
                        // value={{value:{start: null, end: null}}}
                        folded={folded}
                        dateRanges={dateRanges}
                        placeholder="Checkout date"
                        numCals={2}
                        // displayValues={displayValues}
                     />
                     <Button
                        loading={loading}
                        disabled={invalid || submitting || pristine}
                        positive
                        type="submit"
                     >
                        Submit
                     </Button>
                     <Button
                        disabled={loading}
                        onClick={this.props.close}
                        type="button"
                     >
                        Cancel
                     </Button>
                     {/* <Button
                        onClick={() => cancelToggle(!event.cancelled, event.id)}
                        type="button"
                        color={event.cancelled ? "green" : "red"}
                        floated="right"
                        content={
                           event.cancelled ? "Reactivate Event" : "Cancel Event"
                        }
                     /> */}
                  </Form>

                  <Button onClick={this.sampleHanlde}> click me </Button>
               {/* </Segment> */}
            </Grid.Column>
         </Grid>
      );
   }
}

export default withRouter(withFirestore(
   connect(
      mapState,
      actions
   )(
      reduxForm({ form: "eventForm", enableReinitialize: false })(
         EventForm
      )
   )
));
