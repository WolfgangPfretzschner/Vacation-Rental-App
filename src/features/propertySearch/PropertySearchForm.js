import React, { Component } from 'react';
import { connect } from "react-redux";
import { Form, Segment, Button, Label, Divider } from "semantic-ui-react";
import { Field, reduxForm, reset } from "redux-form";

import TextInput from "../../app/common/form/TextInput";
import DateRPicker from "../../dateRangePicker/DateRangePicker";
import { searchForAvailableProperties,clearSearch } from "./searchFormActions";
import { firestoreConnect } from "react-redux-firebase";
import { combineValidators, isRequired } from 'revalidate'
import SelectInput from "../../app/common/form/SelectInput";


const actions = {
   searchForAvailableProperties,
   clearSearch 
};

const validate = combineValidators({
   city: isRequired("city"),
   rooms: isRequired("rooms"),
   datesToSearch: isRequired("datesToSearch")
});

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
   citySelectorMaker = () => {
      if (this.props.properties === undefined) {
         null
      } else {
         let cities = this.props.properties.map(prop => prop.city)
         let unique = [...new Set(cities)]
         return  unique.map(city => { return { key: city, text: city, value: city } })
         // debugger
      }
   }
   roomSelectorMaker = () => {
      if (this.props.properties === undefined) {
         null
      } else {
         let bedrooms = this.props.properties.map(prop => prop.bedrooms)
         let unique = [...new Set(bedrooms)]
         return  unique.map(rooms => { return { key: rooms, text: rooms, value: rooms } })
         // debugger
      }
   }
   clearAll = () => {
      console.log("%cclcik from first","color:red;font-size:18px",)
      this.props.clearSearch();
      
   }

   render(){

      const {handleSubmit, error,
         invalid,
         submitting,
         displayValues,
         stateDefinitions,
         searchForAvailableProperties,
         properties,
         folded,
      } = this.props

      return (
         <div>
            <Segment>
               <Form
                  size="large"
                  // onSubmit={handleSubmit(searchForAvailableProperties)}
               >  
                <Field
                        name="city"
                        type="text"
                        component={SelectInput}
                        options={this.citySelectorMaker()}
                        placeholder="Select City"
                     />
                <Field
                        name="rooms"
                        type="text"
                        component={SelectInput}
                        options={this.roomSelectorMaker()}
                        placeholder="Select number of bedrooms"
                     />
                  {/* <Field
                     name="displayName"
                     type="text"
                     component={TextInput}
                     placeholder="City"
                  /> */}
                  <Field
                     name="datesToSearch"
                     type="text"
                     component={DateRPicker}
                     dateFormat="YYYY-MM-DD HH:mm"
                     timeFormat="HH:mm"
                     placeholder="Checkout date"
                     // displayValues={displayValues}
                     stateDefinitions={stateDefinitions}
                     numCals={2}
                     folded={folded}
                  />
                  {error && (
                     <Label basic color="red">
                        {error}
                     </Label>
                  )}
                  <Button
                  onClick={handleSubmit(searchForAvailableProperties)}
                     disabled={invalid || submitting}
                     fluid
                     size="large"
                     color="teal"
                     style={{marginTop: '15px'}}
                  >
                     Search
               </Button>
                  {/* <Button
                     // disabled={invalid || submitting}
                     onClick={this.clearAll}
                     fluid
                     size="small"
                     color="teal"
                     style={{marginTop: '15px'}}
                  >
                     Clear
               </Button> */}
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
)(firestoreConnect([{collection: "properties"}])(reduxForm({ form: "propertySearchForm", enableReinitialize: true, validate })(PropertySearchForm)));
