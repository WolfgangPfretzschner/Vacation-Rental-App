import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import EventDashboard from '../../features/property/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import EventDetailedPage from '../../features/property/EventDetailed/EventDetailedPage';
import HomePage from '../../features/home/HomePage';
import TestComponent from '../../features/testarea/TestComponent';
import ModalManager from '../../features/modals/ModalManager';

class App extends Component {
  render() {
    return (
      <div>
        <ModalManager/>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path="/events" component={EventDashboard} />
                  <Route path="/test" component={TestComponent} />
                  <Route path="/property/:id" component={EventDetailedPage} />
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
