import React, { Component } from 'react';
import { Grid , Segment} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'

const query = ({auth}) => {
  return [
    {
      collection: 'users',
      doc: auth.uid,
      subcollections: [{collection: 'photos'}],
      storeAs: 'photos'
    }
  ]
}

const mapState = (state) => ({
  profile: state.firebase.profile,
  auth: state.firebase.auth,
//   photos: state.firestore.ordered.photos
})

class UserDetailedPage extends Component {
  render() {
    const {profile, photos} = this.props;
    return (
       <Segment>
      <Grid>
         <h3>My Bookings</h3>
         
      </Grid>
      </Segment>
    );
  }
}

export default compose(
  connect(mapState),
  firestoreConnect(auth => query(auth)),
)(UserDetailedPage);
