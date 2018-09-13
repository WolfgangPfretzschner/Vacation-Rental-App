import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import PersonIcon from "@material-ui/icons/Person";
import SaveIcon from "@material-ui/icons/Save";
import PrintIcon from "@material-ui/icons/Print";
import ShareIcon from "@material-ui/icons/Share";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link, NavLink, withRouter } from 'react-router-dom';
import Comp from '../../components/comp'

const MyNotesLink = {component: props => <Link to="/notes" {...props}  />}
// const MyAction = { onClick=this.props.signOut }
// const MyAction = props => {onClick={signOut} , {...props}} 


const styles = theme => ({
   root: {
      height: 100,
      
   },
   speedDial: {
      position: "absolute",
      bottom: theme.spacing.unit * 1,
      right: theme.spacing.unit * 1,
      
   }
});

const actions = [
   { icon: <PersonIcon  /> , func: ()=>this.handleClick, name: "Notes" , dir:"down", comp:MyNotesLink},
   { icon: <SaveIcon />, func: ()=>this.handleClick, name: "Save", dir:"down"},
   { icon: <PrintIcon />, func: ()=>this.handleClick, name: "Print" , dir:"down"},
   { icon: <ShareIcon />, func: ()=>this.handleClick, name: "Share" , dir:"down"},
   { icon: <DeleteIcon />, func: ()=>this.handleLogout, name: "Delete" , dir:"down", comp:''}
];

class SpeedDials extends React.Component {
   state = {
      open: false,
      hidden: false,
   
   };

   handleVisibility = () => {
      this.setState(state => ({
         open: false,
         hidden: !state.hidden
      }));
   };

   handleClick = () => {

      this.setState(state => ({
         open: !state.open
      }));
   };
   handleLogout = () => {
      //console.log("%ctest","color:red;font-size:18px",)
      this.props.firebase.logout();
      this.props.history.push("/");
      this.setState(state => ({
         open: !state.open
      }));
   }

   handleOpen = () => {
      if (!this.state.hidden) {
         this.setState({
            open: true
         });
      }
   };

   handleClose = () => {
      this.setState({
         open: false
      });
   };

   render() {
      const { classes, signOut } = this.props;
      const { hidden, open } = this.state;

      let isTouch;
      if (typeof document !== "undefined") {
         isTouch = "ontouchstart" in document.documentElement;
      }

      return (
         <div className={classes.root}>
            <Button onClick={this.handleVisibility}>Toggle Speed Dial</Button>
            <SpeedDial
               
               ariaLabel="SpeedDial example"
               className={classes.speedDial}
               hidden={hidden}
               icon={<SpeedDialIcon />}
               onBlur={this.handleClose}
               onClick={this.handleClick}
               onClose={this.handleClose}
               onFocus={isTouch ? undefined : this.handleOpen}
               onMouseEnter={isTouch ? undefined : this.handleOpen}
               onMouseLeave={this.handleClose}
               open={open}
               direction= 'left'
            >
               {actions.map(action => (
                  <SpeedDialAction
                     key={action.name}
                     icon={action.icon}
                     tooltipTitle={action.name}
                     onClick={action.func}
                     tooltipPlacement={action.dir}
                     // ButtonProps={action.comp}
                     // component={Link}
                     // to='/notes'
                     ButtonProps={action.comp}
                     
                  />
               ))}
          
            </SpeedDial>
         </div>
      );
   }
}

SpeedDials.propTypes = {
   classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(SpeedDials));
