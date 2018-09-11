import React from 'react'
import { Form, Label } from 'semantic-ui-react'
// import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

const DateRangeInput = ({ input: { value, onChange, onBlur, ...restInput }, width, placeholder, handleSelect, meta: { touched, error }, ...rest }) => {
   if (value) {
      value = moment(value, 'X')
   }
   const dateRanges = [
      {
         state: 'enquire',
         range: moment.range(
            moment().add(2, 'weeks').subtract(5, 'days'),
            moment().add(2, 'weeks').add(3, 'days')
         ),
      },
      { 
         state: 'unavailable',
         range: moment.range(
            moment().add(3, 'weeks'),
            moment().add(3, 'weeks').add(5, 'days')
         ),
      },
   ];
   
   const stateDefinitions = {
      available: {
         color: null,
         label: 'Available',
      },
      enquire: {
         color: '#ffd200',
         label: 'Enquire',
      },
      unavailable: {
         selectable: false,
         color: '#78818b',
         label: 'Unavailable',
      },
   };
   return (

      <Form.Field error={touched && !!error} width={width}>
         <DateRangePicker
            {...rest}
            firstOfWeek={1}
            numberOfCalendars={2}
            selectionType='range'
            minimumDate={new Date()}
            stateDefinitions={stateDefinitions}
            dateStates={dateRanges}
            defaultState="available"
            showLegend={true}
            value={this.state.value}
            onSelect={this.handleSelect}
            onChange={onChange}
            placeholderText={placeholder}
            {...restInput}

         />
         {touched && error && <Label basic color='red'>{error}</Label>}
      </Form.Field>
   )
}

export default DateRangeInput
