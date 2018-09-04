import React, { Component, Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MySlider from "./MySlider";
import { Card, Icon, Image, Rating, Statistic } from "semantic-ui-react";

const styles = theme => ({
   root: {
      flexGrow: 1
   },
   paper: {
      padding: theme.spacing.unit * 2,
      textAlign: "center",
      color: theme.palette.text.secondary
   }
});
class PropertytCard extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      console.log("%cprops in card", "color:blue;font-size:18px", this.props);
      const { classes, prop } = this.props;
      return (
         <Paper className={classes.paper}>
            <Card>
               <Image
                  as={Link}
                  to={`/property/${prop.id}`}
                  src={prop.primaryUrl}
                  alt="Smiley face"
               />
               <Card.Content>
                  <Card.Header>Matthew</Card.Header>
                  <Card.Meta>
                     <span className="date">Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>
                     Matthew is a musician living in Nashville.
                  </Card.Description>
               </Card.Content>
               <Card.Content extra>
                  <a>
                     <Icon name="user" />
                     22 Friends
                  </a>
               </Card.Content>
               <Statistic.Group size='mini' widths='four'>
               <Statistic size='mini'>
                  <Statistic.Value>22</Statistic.Value>
                  <Statistic.Label>Saves</Statistic.Label>
               </Statistic>

               <Statistic size='mini'>
                  <Statistic.Value text>
                     Three
        <br />Thousand
      </Statistic.Value>
                  <Statistic.Label>Signups</Statistic.Label>
               </Statistic>

               <Statistic size='mini'>
                  <Statistic.Value>
                     <Icon name='plane' />
                     5
                  </Statistic.Value>
                  <Statistic.Label>Flights</Statistic.Label>
               </Statistic>

               <Statistic size='mini'>
                  <Statistic.Value>
                     <Image src='/images/avatar/small/joe.jpg' className='circular inline' />
                     42
                  </Statistic.Value>
                  <Statistic.Label>Team Members</Statistic.Label>
               </Statistic>
            </Statistic.Group>
            </Card>
         </Paper >
      );
   }
}
PropertytCard.propTypes = {
   classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PropertytCard);
