import React, { Component } from "react";
import MyMap from "./MyMap";
import GoogleMap from "./MyGoogleMap";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
   root: {
   flexGrow: 1,
   },
   paper: {
   padding: theme.spacing.unit * 2,
   textAlign: 'center',
   color: theme.palette.text.secondary,
   },
});

class Content extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      const {classes } = this.props
      return (
         // <div className='master-detail-element detail'>
         <Paper className={classes.paper}>
            {/* <MyMap/> */}
               <GoogleMap />
               this is a test
         </Paper>
         // </div>
      );
   }
}

export default withStyles(styles)(Content);
