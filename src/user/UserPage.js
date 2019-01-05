import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import DateRangePicker from "../dateRangePicker/DateRangePicker";
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment)

const mapState = (state, ownProps) => {
   let bookings = [];
   let userID = state.firebase.auth.uid;
   if (
      state.firestore.ordered.bookings &&
      state.firestore.ordered.bookings.length > 0
   ) {
      bookings = state.firestore.ordered.bookings.filter(
         booking => booking.guestUid === userID
      );
   } else {
   }
   return {
      bookings,
      auth: state.firebase.auth,
      profile: state.firebase.profile
   };
};

class UserPage extends Component {

   dateMoments = () => {
      return this.props.bookings.map( (booking) => { 
         let start = moment.unix(booking.checkin_date.seconds)
         let end = moment.unix(booking.checkout_date.seconds)
         let mom = moment.range(start, end)
         return {state:"unavailable", range:mom }
      }) 
   }


   bookingMaker = () => {
      //console.log("%cboooo", "color:red;font-size:18px", this.props.bookings);
      if (this.props.bookings === undefined) {
         return (
            <div>
               <h2>no bookings yet</h2>
            </div>
         );
      } else {
         return this.props.bookings.map(booking => {
            
               let start = moment.unix(booking.checkin_date.seconds)
               let end = moment.unix(booking.checkout_date.seconds)
               let mom = moment.range(start, end)
               let dateRanges = [{state:"unavailable", range:mom }]
            
            return (
               <div>
                  <Segment>
                   
                        <h3>Your booking for property {booking.name}</h3>
                        <DateRangePicker key={booking.id} folded={true} dateRanges={dateRanges}  numCals={3}  input={{input:{value:{start: null, end: null}}}}/>
                  </Segment>
               </div>
            );
         });
      }
   };

   render() {
      const { bookings, auth } = this.props;
      //console.log("%cprops", "color:red;font-size:18px", this.props);
      return (
         <div>
            <Segment>
               <Grid>
                  <h3>Hi {auth.displayName}, here are your bookings.</h3>
                  <br />
                  {/* <h4>{booking} </h4> */}
               </Grid>
            </Segment>
            {this.bookingMaker()}
         </div>
      );
   }
}

export default compose(
   connect(mapState),
   firestoreConnect([{ collection: "bookings" }])
)(UserPage);
