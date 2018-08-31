import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class homeSearch extends Component {
    constructor(props){
        super(props)
        this.state = {
            checkInDate: '',
            checkOutDate: '',
            guests: 0,
            roomes: 0,
        }
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
      animalSrc: state.meat.animalSrc,
      isFetching: state.meat.isFetching
    }
  }


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
