import React, { Component } from "react";
import { Icon, Tooltip, Typography } from "@material-ui/core";
import GoogleMap from "google-map-react";
import { func } from "prop-types";
import PropertyCard from './PropertyCard'


function Marker({ text }) {
   return (
      // <PropertyCard prop={}/>
      <Tooltip title={text} placement="top" leaveDelay="500" >
         <Icon className="text-blue">place</Icon>
         
      </Tooltip>
   );
}


class SimpleExample extends Component {

   markerMaker = (markers) => {
      return markers === null ?
         null :
         markers.map(obj => <Marker key={obj.name} text={obj.name} lat={obj.lat} lng={obj.lng} />)
   }

   render() {
      const {zoom, lat, lng, markers } = this.props
      return (
         <div id="mapid">
            <Typography className="h2 mb-16"></Typography>
            <div style={{ height: '80vh', width: '100%' }}>
               <GoogleMap 
                  bootstrapURLKeys={{
                     key: "AIzaSyAyBgEspGN_YTyR0ypkHiRwFh7aLfHr8xg"
                     // process.env.REACT_APP_MAP_KEY
                  }}
                  defaultZoom={zoom}
                  defaultCenter={[lat, lng]}
               >

                  {this.markerMaker(markers)}
                  {/* <Marker text="Marker Text" lat={lat} lng={lng} /> */}
                  {/* <Marker text="Marker Text" lat="26.562855" lng="-81.949532" /> */}
               </GoogleMap>
            </div>
         </div>
      );
   }
}

export default SimpleExample;
