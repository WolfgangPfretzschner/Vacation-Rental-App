import React, { Component } from "react";
import Header from "./Header";
import Navbar from "../nav/NavBar";
import { Container } from 'semantic-ui-react';
import NoteContainer from "./NoteContainer";
import FourOhFour from "./FourOhFour";
import { Switch, Route } from "react-router-dom";
import PropertiesContainer from "./PropertiesContainer";
import UserPage from '../user/UserDetailed/UserPage'
// import CssBaseline from "@material-ui/core/CssBaseline";
import NavBarM from "../nav/NavBar/NavBarM";
import EventForm from "../features/event/EventForm/EventForm";
import PropertySingle from './PropertySingle'
import ModalManager from '../modals/ModalManager';
import DateRangePicker from '../dateRangePicker/DateRangePicker'
 
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
            <ModalManager />
            <div>
               <NavBarM />
               <Container className="main">
                  <Switch>
                     <Route exact path="/" component={PropertiesContainer} />
                     <Route path="/properties" component={PropertiesContainer} />
                     <Route path="/property/:id" component={PropertySingle} />
                     <Route path="/profile/:id" component={UserPage} />
                  </Switch>
               </Container>
            </div>
      </div>
   );
}
}

export default App;

