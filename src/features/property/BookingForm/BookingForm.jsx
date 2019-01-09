/*global google*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { withRouter } from 'react-router-dom'
import { withFirestore } from "react-redux-firebase";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from "revalidate";
import { createBooking, seedProperties } from "../propertiesActions";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";

import DateRPicker from "../../../dateRangePicker/DateRangePicker";

const mapState = (state, ownProps) => {

   return {

      properties: state.firestore.ordered.properties,
      auth: state.firebase.auth
   };

}

const actions = {
   createBooking,
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

class BookingForm extends Component {
 
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
      this.props.createBooking(newValues);
      this.props.history.push(`/profile/${this.props.auth.uid}`)

   };
  
   render() {
      
      const {
         invalid, 
         submitting,
         pristine,
         loading,
         dateRanges,
         folded,
         handleSubmit
      } = this.props;
      return (
         <Grid>
         
            <Grid.Column width={12}>
                  <Header sub color="teal" content="Create Booking" /> 
                  <Form onSubmit={handleSubmit(this.onFormSubmit) }>
                     <Field
                        name="name"
                        type="text"
                        component={TextArea}
                        rows={3}
                        placeholder="Any comments?"
                     />
                     <Header sub color="teal" content="Travel Dates" />
                     <Field
                        name="checkout_date"
                        type="text"
                        component={DateRPicker}
                        dateFormat="YYYY-MM-DD HH:mm"
                        timeFormat="HH:mm"
                        folded={folded}
                        dateRanges={dateRanges}
                        placeholder="Checkout date"
                        numCals={2}
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
                  </Form>

                  <Button onClick={this.sampleHanlde}> seed </Button>
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
      BookingForm
    )
  )
));
