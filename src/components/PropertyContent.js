import React, { Component } from "react";
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
   markersFunc = () => {
      // debugger
      if (this.props.properties && typeof this.props.search == 'string') {
         return [{name:"No Homes for the search", lat:26.573981, lng:-81.913450 }]
         ;
      } 
      if (this.props.properties && this.props.search.length == []) {
         return this.props.properties.map( obj => {return {name:obj.name, lat:obj.lat, lng:obj.lng }}
         );
      } else {
         return this.props.search.map( obj => {return {name:obj.name, lat:obj.lat, lng:obj.lng }}
         );
      }
   };

   // markersFunc = () => {
   //    return this.props.properties === undefined ? 
   //    null :
   //    this.props.properties.map( obj => {return {name:obj.name, lat:obj.lat, lng:obj.lng }}) 

   // }
   render() {
      const {classes, properties } = this.props
      console.log("%cprops container","color:red;font-size:18px",this.props)
      return (
         // <div className='master-detail-element detail'>
         <Paper className={classes.paper}>
               <GoogleMap lat={26.573981} lng={-81.913450} zoom={10} markers={ this.markersFunc() } />
         </Paper>
         // </div>
      );
   }
}

export default withStyles(styles)(Content);
