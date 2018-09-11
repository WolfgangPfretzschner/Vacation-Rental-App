/*global google*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { withFirestore } from "react-redux-firebase";
import Script from "react-load-script";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from "revalidate";
import { createEvent, updateEvent, cancelToggle, seedProperties } from "../eventActions";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
import DateInput from "../../../app/common/form/DateInput";
import PlaceInput from "../../../app/common/form/PlaceInput";
import firebase from "../../../firebase";
import DateRPicker from "./../../../dateRangePicker/DateRangePicker";

const mapState = (state, ownProps) => {
   let displayValues
   if(state.form.eventForm && state.form.eventForm.values){
      displayValues = state.form.eventForm.values;
   }
   let event = {};
   let propertieNames = []
   let idCurrent = ownProps.match.params.id;
   if (state.firestore.ordered.bookings) {
      if (
         idCurrent &&
         state.firestore.ordered.bookings.length > 0
      ) {
         event = state.firestore.ordered.bookings.find(
            prop => prop.id === idCurrent
         );
      } else {

         return {
            initialValues: event,
            event,
            loading: state.async.loading,
            propertieNames,
            displayValues
         };

      }
      //   debugger
   };
}

const actions = {
   createEvent,
   updateEvent,
   cancelToggle,
   seedProperties
};

const category = [
   { key: "Banyan", text: "Banyan", value: "Banyan" },
   { key: "Patricia", text: "Patricia", value: "Patricia" },
   { key: "Victoria", text: "Victoria", value: "Victoria" },
   { key: "Bella", text: "Bella", value: "Bella" },
     { key: 'Catalina', text: 'Catalina', value: 'Catalina' }
   //   { key: 'food', text: 'Food', value: 'food' },
   //   { key: 'music', text: 'Music', value: 'music' },
   //   { key: 'travel', text: 'Travel', value: 'travel' }
];

// const validate = combineValidators({
//    title: isRequired({ message: "The event title is required" }),
//    category: isRequired({ message: "Please provide a category" }),
//    description: composeValidators(
//       isRequired({ message: "Please enter a description" }),
//       hasLengthGreaterThan(4)({
//          message: "Description needs to be at least 5 characters"
//       })
//    )(),
//    city: isRequired("city"),
//    venue: isRequired("venue"),
//    date: isRequired("date")
// });

class EventForm extends Component {
   state = {
      cityLatLng: {},
      venueLatLng: {},
      scriptLoaded: false
   };

   async componentDidMount() {
      const { firestore, match } = this.props;
      await firestore.setListener(`bookings/`);
   }

   async componentWillUnmount() {
      const { firestore, match } = this.props;
      await firestore.unsetListener(`bookings/`);
   }

   handleScriptLoaded = () => this.setState({ scriptLoaded: true });

     handleCitySelect = selectedCity => {
       geocodeByAddress(selectedCity)
         .then(results => getLatLng(results[0]))
         .then(latlng => {
           this.setState({
             cityLatLng: latlng
           });
         })
         .then(() => {
           this.props.change('city', selectedCity);
         });
     };

   //   handleVenueSelect = selectedVenue => {
   //     geocodeByAddress(selectedVenue)
   //       .then(results => getLatLng(results[0]))
   //       .then(latlng => {
   //         this.setState({
   //           venueLatLng: latlng
   //         });
   //       })
   //       .then(() => {
   //         this.props.change('venue', selectedVenue);
   //       });
   //   };
   sampleHanlde = () => {
     this.props.seedProperties()
   }

   onFormSubmit = values => {
      // let checkIn =  values.checkin_date._d
      // let checkOut =  values.checkout_date._d
      // let newValues = {...values, checkin_date: checkIn, checkout_date:checkOut }
      // debugger
      //  if (this.props.initialValues.id) {
      //    if (Object.keys(values.venueLatLng).length === 0) {
      //      values.venueLatLng = this.props.event.venueLatLng
      //    }
      //    this.props.updateEvent(values);
      //    this.props.history.goBack();
      //  } else {
      this.props.createEvent(values);
      // this.props.history.push('/properties');
      //  }
   };

   render() {
      const {
         invalid, 
         submitting,
         pristine,
         event,
         cancelToggle,
         loading,
         displayValues
      } = this.props;
      return (
         <Grid>
            <Script
               url="https://maps.googleapis.com/maps/api/js?key=AIzaSyC1Oy3Ic6JyE6RR4eEbEFw2T-ynXjjWzTc&libraries=places"
               onLoad={this.handleScriptLoaded}
            />
            <Grid.Column width={10}>
               <Segment>
                  <Header sub color="teal" content="Create Booking" /> 
                  <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                     <Field
                        name="category"
                        type="text"
                        component={SelectInput}
                        options={category}
                        placeholder="Select Property"
                     />
                     <Field
                        name="description"
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
                        value={{value:{start: null, end: null}}}
                        placeholder="Checkout date"
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
                        onClick={this.props.history.goBack}
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
               </Segment>
            </Grid.Column>
         </Grid>
      );
   }
}

export default withFirestore(
   connect(
      mapState,
      actions
   )(
      reduxForm({ form: "eventForm", enableReinitialize: false })(
         EventForm
      )
   )
);
