import React from "react";
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import { extendMoment } from "moment-range";
import { Form, Label, Button } from 'semantic-ui-react'
const moment = extendMoment(originalMoment);

class DateRPicker extends React.Component {
   constructor(props, context) {
      super(props, context);

      const today = moment();

      this.state = {
         isOpen: this.props.folded,
         value: moment.range(today.clone().subtract(7, "days"), today.clone())
      };
   }

   handleSelect = (range, states) => {
      // range is a moment-range object
      this.setState({
         value: range,
         states: states
      });
   };

   onSelect = (value, states) => {
      this.setState({ value, states });
   };

   onToggle = () => {
      this.setState({ isOpen: !this.state.isOpen });
   };

   renderSelectionValue = () => {
      
      return (
         <div>
         {/* {this.props.displayValues && (
         <div>
            <div>Selection</div>
            {this.props.displayValues.start.format("YYYY-MM-DD")}
            {" - "}
            {this.props.displayValues.end.format("YYYY-MM-DD")}
         </div>
         )
         } */}
         </div>
      );
   };
   // meta: {touched, error},
   render() {
      const { input: {value, onChange, onBlur, ...restInput}, width, dateRanges, numCals, placeholder,displayValues, ...rest } = this.props
      
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
      // const dateRanges = [
      //    {
      //       state: "enquire",
      //       range: moment.range(
      //          moment() .add(2, "weeks") .subtract(5, "days"),
      //          moment() .add(2, "weeks") .add(3, "days")
      //       )
      //    },
      //    {
      //       state: "unavailable",
      //       range: moment.range(
      //          moment().add(3, "weeks"),
      //          moment() .add(3, "weeks") .add(5, "days")
      //       )
      //    }
      // ];

      return (
         <div>
            {/* <div>{this.renderSelectionValue()}</div> */}

            <div>
               <Button
                  fluid
                  size="small"
                  color="teal"
                  // style={{padding: 5}}
                  type="button"
                  // value="Toggle date picker"
                  onClick={this.onToggle}
               >Open Dates Picker</Button>
            </div>

            {this.state.isOpen && (
               <Form.Field width={width}>
               <DateRangePicker
                  {...rest}
                  firstOfWeek={1}
                  numberOfCalendars={numCals}
                  selectionType="range"
                  minimumDate={new Date()}
                  stateDefinitions={stateDefinitions}
                  dateStates={dateRanges}
                  defaultState="available"
                  showLegend={true}
                  value={value}
                  onSelect={onChange}
                  {...restInput}
               />
               {/* {touched && error && <Label basic color='red'>{error}</Label>} error={touched && !!error}  */}
               </Form.Field>
             )}
         </div>
      );
   }
}

export default DateRPicker;
