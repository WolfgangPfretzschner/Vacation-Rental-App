import React from "react";
import { Link, NavLink, withRouter } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";


class SimpleMenu extends React.Component {
   state = {
      anchorEl: null
   };



   handleClick = event => {
      this.setState({ anchorEl: event.currentTarget });
   };

   handleClose = () => {
      this.setState({ anchorEl: null });
   };

   render() {
      const { anchorEl } = this.state;

      return (
         <div>
            <Button
               aria-owns={anchorEl ? "simple-menu" : null}
               aria-haspopup="true"
               onClick={this.handleClick}
               variant="contained" 
               color="primary"
            >
               Open Menu
      </Button>
            <Menu
               id="simple-menu"
               anchorEl={anchorEl}
               open={Boolean(anchorEl)}
               onClose={this.handleClose}
               
            >
               <MenuItem component={Link} to="/properties" onClick={this.handleClose} >Properties</MenuItem>
               <MenuItem component={Link} to="/notes" name="DashBoard" onClick={this.handleClose}>Dashboard</MenuItem>
               <MenuItem onClick={this.handleClose}>Logout</MenuItem>
            </Menu>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return {
      auth: state.auth
   }
}

export default withRouter(connect(mapStateToProps)(SimpleMenu))
