import React, { Component } from "react";
import Header from "./Header";
import Navbar from "../nav/NavBar";
import { Container } from 'semantic-ui-react';
import NoteContainer from "./NoteContainer";
import FourOhFour from "./FourOhFour";
import { Switch, Route } from "react-router-dom";
import PropertiesContainer from "./PropertiesContainer";
// import CssBaseline from "@material-ui/core/CssBaseline";
import NavBarM from "../nav/NavBar/NavBarM";
import EventsDashBoard from "../features/event/EventDashboard/EventDashboard";
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PropertySingle from './PropertySingle'
import ModalManager from '../modals/ModalManager';
// import DateRangePicker from '../DateRangePicker/DateRangePicker'
 
// const theme = createMuiTheme({
//    palette: {
//       primary: {
//          main: '#9575cd',
//       },
//       secondary: {
//          main: '#ff9800',
//       },
//    },
// });
class App extends Component {
   render() {
      return (
      <div>
      <ModalManager/>
     
     
         <Switch>

         </Switch>

         <Route
            path="/(.+)"
            render={() => (
            <div>
               <NavBarM />
               <Container className="main">
                  <Switch>
                  <Route path="/notes" component={EventsDashBoard} />
                  <Route path="/properties" component={PropertiesContainer} />
                  <Route path="/property/:id" component={PropertySingle} />
                  {/* <Route path="/manage/:id" component={EventForm} /> */}
                  {/* <Route path="/people" component={PeopleDashboard} /> */}
                  {/* <Route path="/profile/:id" component={UserDetailedPage} /> */}
                  {/* <Route path="/settings" component={SettingsDashboard} /> */}
                  {/* <Route path="/createEvent" component={EventForm} /> */}
                  </Switch>
                  </Container>
            </div>
            )}
            />
      </div>
   );
}
}

export default App;

