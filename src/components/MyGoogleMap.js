import React, { Component } from "react";
import { Icon, Tooltip, Typography } from "@material-ui/core";
import GoogleMap from "google-map-react";

function Marker({ text }) {
   return (
      <Tooltip title={text} placement="top">
         <Icon className="text-red">place</Icon>
      </Tooltip>
   );
}

class SimpleExample extends Component {
   render() {
      return (
         <div id="mapid">
            <Typography className="h2 mb-16">Simple Map Example</Typography>
            <div style={{ height: '100vh', width: '100%' }}>
               <GoogleMap 
                  bootstrapURLKeys={{
                     key: "AIzaSyAyBgEspGN_YTyR0ypkHiRwFh7aLfHr8xg"
                     // process.env.REACT_APP_MAP_KEY
                  }}
                  defaultZoom={11}
                  defaultCenter={[26.562855, -81.949532]}
               >
                  <Marker text="Marker Text" lat="-34.397" lng="150.644" />
               </GoogleMap>
            </div>
         </div>
      );
   }
}

export default SimpleExample;
