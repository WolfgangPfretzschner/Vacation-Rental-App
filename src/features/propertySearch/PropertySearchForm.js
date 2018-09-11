import React, { Component } from 'react';
import { connect } from "react-redux";
import { Form, Segment, Button, Label, Divider } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { combineValidators, isRequired } from "revalidate";
import TextInput from "../../app/common/form/TextInput";
import DateRPicker from "../../dateRangePicker/DateRangePicker";
import { searchForAvailableProperties } from "./searchFormActions";
import { firestoreConnect } from "react-redux-firebase";

const actions = {
   searchForAvailableProperties
};

// const validate = combineValidators({
//    displayName: isRequired("displayName"),
//    email: isRequired("email"),
//    password: isRequired("password")
// });

const stateDefinitions = {
   available: {
      color: null,
      label: "Available"
   },
   enquire: {
      color: "#ffd200",
      label: "Enquire"
   },
   unavailable: {
      selectable: false,
      color: "#78818b",
      label: "Unavailable"
   }
};

const mapState = (state, ownProps) => {
   let displayValues;
   if (state.form.propertySearchForm && state.form.propertySearchForm.values) {
      displayValues = state.form.propertySearchForm.values;
   }
   return {
      displayValues,
      properties: state.firestore.ordered.properties
   };
};

class PropertySearchForm extends Component{
   
   // componentDidMount(){
   //    this.props.searchForAvailableProperties()
   // }

   render(){

      const {handleSubmit, error,
         invalid,
         submitting,
         displayValues,
         stateDefinitions,
         searchForAvailableProperties,
         properties } = this.props

      return (
         <div>
            <Segment>
               <Form
                  size="large"
                  onSubmit={handleSubmit(searchForAvailableProperties)}
               >
                  <Field
                     name="displayName"
                     type="text"
                     component={TextInput}
                     placeholder="City"
                  />
                  <Field
                     name="rooms"
                     type="text"
                     component={TextInput}
                     placeholder="Rooms"
                  />
                  <Field
                     name="datesToSearch"
                     type="text"
                     component={DateRPicker}
                     dateFormat="YYYY-MM-DD HH:mm"
                     timeFormat="HH:mm"
                     placeholder="Checkout date"
                     displayValues={displayValues}
                     stateDefinitions={stateDefinitions}
                  />
                  {error && (
                     <Label basic color="red">
                        {error}
                     </Label>
                  )}
                  <Button
                     disabled={invalid || submitting}
                     fluid
                     size="large"
                     color="teal"
                     style={{marginTop: '15px'}}
                  >
                     Search
               </Button>
                  {/* <Divider horizontal>Or</Divider> */}
                  {/* <SocialLogin/> */}
               </Form>
            </Segment>
         </div>
      );
   }
};

export default connect(
   mapState,
   actions
)(firestoreConnect([{collection: "properties"}])(reduxForm({ form: "propertySearchForm" })(PropertySearchForm)));
