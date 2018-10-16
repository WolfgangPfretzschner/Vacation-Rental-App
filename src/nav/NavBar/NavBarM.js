import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from "react-router-dom";
import { withFirebase } from 'react-redux-firebase'
import { withStyles } from "@material-ui/core/styles";


import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu1 from "../Menus/SignedInMenu1";
import { openModal } from "../../modals/modalActions";


const styles = theme => ({
   root: {
      height: 100,
      
   },
});


const actions = {
   openModal
};

const mapState = state => ({
   auth: state.firebase.auth,
   profile: state.firebase.profile
});

class NavBar extends Component {
   handleSignIn = () => {
      this.props.openModal("LoginModal");
   };

   handleRegister = () => {
      this.props.openModal("RegisterModal");
   };

   handleSignOut = () => {
      this.props.firebase.logout();
      this.props.history.push("/properties");
   };

   render() {
      const { auth, profile } = this.props;
      const authenticated = auth.isLoaded && !auth.isEmpty;
      return (
         <Menu inverted fixed="top">
            <Container>
               <Menu.Item as={Link} to="/" header>
                  <img src="./assets/img_1-2-300x82.png" alt="logo" />
                  F R G
               </Menu.Item>
               <Menu.Item as={NavLink} to="/" name="Properties" />
               {/* <Menu.Item as={NavLink} to="/notes" name="DateRangePicker" /> */}
               {/* {authenticated && (
                  <Menu.Item as={NavLink} to="/notes" name="Create Booking" />
               )} */}

               {/* {authenticated && (
                  <Menu.Item>
                     <Button
                        onClick={this.handleSignOut}
                        floated="right"
                        positive
                        inverted
                        content="Log Out"
                     />
                  </Menu.Item>
               )} */}
               {authenticated ? (
                  <SignedInMenu1
                     auth={auth}
                     profile={profile}
                     signOut={this.handleSignOut}
                  />
               ) : (
                  <SignedOutMenu
                     register={this.handleRegister}
                     signIn={this.handleSignIn}
                  />
               )}
            </Container>
         </Menu>
      );
   }
}

export default withStyles(styles)(withRouter(
   withFirebase(
      connect(
         mapState,
         actions
      )(NavBar)
   )
));
