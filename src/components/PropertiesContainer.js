import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import Search from './Search'
import PropertySidebar from './PropertiesSidebar';
import PropertyContent from './PropertyContent';
import PropTypes from 'prop-types';
import { firestoreConnect } from "react-redux-firebase";

// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

import { Grid, Image } from 'semantic-ui-react'

// const styles = theme => ({
//    root: {
//    flexGrow: 1,
//    },
//    paper: {
//    padding: theme.spacing.unit * 2,
//    textAlign: 'center',
//    color: theme.palette.text.secondary,
//    },
// });
function mapState(state) {
   return {
      properties: state.firestore.ordered.properties,
      search: state.search
   };
}

function actions(){

}
class PropertiesContainer extends Component {
   constructor(props) {
      super(props);
   }
  
   render() {
      const { classes, properties } = this.props;
      
      return (
         <Grid columns='equal' className="app">
         <Grid.Row streched>
           <Grid.Column >
           <PropertyContent properties={properties} />
           </Grid.Column>
           <Grid.Column>
             <PropertySidebar />
           </Grid.Column>
         </Grid.Row>
     
      
       </Grid>
         
      )
   }
}


export default connect(mapState, actions)(firestoreConnect([{collection: "properties"}])(PropertiesContainer));
