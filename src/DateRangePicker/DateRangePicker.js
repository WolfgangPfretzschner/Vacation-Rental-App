import React from "react";
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(originalMoment);

class DateRPicker extends React.Component {
  constructor(props, context) {
    super(props, context);

    const today = moment();

    this.state = {
      isOpen: false,
      value: moment.range(today.clone().subtract(7, "days"), today.clone())
    };
  }
  
  handleSelect = (range, states) => {
    // range is a moment-range object
    this.setState({
      value: range,
      states: states,
    })
  }

  onSelect = (value, states) => {
    this.setState({ value, states });
  };

  onToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  renderSelectionValue = () => {
    return (
      <div>
        <div>Selection</div>
        {this.state.value.start.format("YYYY-MM-DD")}
        {" - "}
        {this.state.value.end.format("YYYY-MM-DD")}
      </div>
    );
  };

  
  render() {

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

    return (
      <div>
        <div>{this.renderSelectionValue()}</div>

        <div>
          <input
            type="button"
            value="Toggle date picker"
            onClick={this.onToggle}
          />
        </div>

        {this.state.isOpen && (
          <DateRangePicker
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
          />
        )}
      </div>
    );
  }
}

export default DateRPicker;
