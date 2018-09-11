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

   limitContent = (title, limit = 25) => {
      const newTitle = [];
      if (title.length > limit) {
         title.split(" ").reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
               newTitle.push(cur);
            }
            return acc + cur.length;
         }, 0);
         return `${newTitle.join(" ")} ...`;
      }
      return title;
   };

   
   render() {
      const { classes, prop, name, } = this.props;
      
      console.log("%cprops in card", "color:blue;font-size:18px", this.props);
      const shortDescription = this.limitContent(prop.description, 45)
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
                  <Card.Header>{name}</Card.Header>
                  {/* <Card.Meta>
                     <span className="date">Joined in 2015</span>
                  </Card.Meta> */}
                  <Card.Description>
                  {shortDescription}
                  </Card.Description>
               </Card.Content>
               <Card.Content extra>
                  
                     <Statistic.Value>
                        <Image
                           style={{height:'30px'}}
                           src='./assets/dog.png'
                           className='circular inline'
                        />Pet Friendly
                     </Statistic.Value>
                    
                  
               </Card.Content>
               <Card.Content extra>
               <Statistic.Group   size="mini" widths="three">
                  <Statistic>
                     <Statistic.Value><Icon name="dollar sign" /></Statistic.Value>
                     <Statistic.Label>{prop.price_per_night}/Night</Statistic.Label>
                  </Statistic>

                  {/* <Statistic>
                     <Statistic.Value text>
                        Three
                        <br />
                        Thousand
                     </Statistic.Value>
                     <Statistic.Label>Signups</Statistic.Label>
                  </Statistic> */}

                  <Statistic>
                     <Statistic.Value>
                        <Icon name="user" />
                     </Statistic.Value>
                     <Statistic.Label>{prop.guests}/Guests</Statistic.Label>
                  </Statistic>

                  <Statistic>
                        <Statistic.Value><Icon name="bed" /></Statistic.Value>
                     <Statistic.Label>{prop.bedrooms}/Rooms</Statistic.Label> 
                  </Statistic>
               </Statistic.Group>
               </Card.Content>
            </Card>
         </Paper>
      );
   }
}
PropertytCard.propTypes = {
   classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PropertytCard);
