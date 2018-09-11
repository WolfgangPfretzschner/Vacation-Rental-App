import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProperties } from "../actions/index";
import { withFirestore, firebaseConnect, isEmpty } from "react-redux-firebase";
import { Grid, Header, Icon, Item, List, Segment, Image } from 'semantic-ui-react';
import SlickSlider from '../features/slider/slick-slider'
import DateRangePicker from '../dateRangePicker/DateRangePicker'
import GoogleMap from '../components/MyGoogleMap'


const mapState = (state, ownProps) => {
   let property = {};
   let idCurrent = ownProps.match.params.id
   if (state.firestore.ordered.properties && state.firestore.ordered.properties.length > 0) {
      property = state.firestore.ordered.properties.find(prop => prop.id === idCurrent);
   } else {
   }
   return {
      property,
      // auth: state.firebase.auth
   };
};

const actions = {
   fetchProperties
}

class SingleProperty extends Component {
   componentDidMount() {
      // debugger
      const { firestore, match} = this.props;
      let property = firestore.get(`properties/${match.params.id}`);
      // debugger
   }

   // async componentWillUnmount() {
   //    const { firestore, match } = this.props;
   //    await firestore.unsetListener(`properties/${match.params.id}`);
   // }

   render() {
      console.log("%c render 7", "color:red;font-size:18px", this.props, this.state)
      const { property } = this.props;
      return (
         <div className="singleProperty">
            <Segment>
               <Header dividing size="large" content={property.name} />
            </Segment>
            <Segment>
               <Header dividing size="large" content="Photos" />
               <SlickSlider images={property.imgages} />
                %20
            </Segment>

            <Segment>
               <Grid columns={2} divided>
                  <Grid.Row stretched>
                     <Grid.Column>
                        <Segment>
                           <GoogleMap lat={property.lat} lng={property.lng} zoom={10} markers={[{name:property.name, lat:property.lat, lng:property.lng}]}/>
                        </Segment>
                     </Grid.Column>
                     <Grid.Column>
                        <Segment>
                        <Header  dividing size="large" content="Details" />
                        <p> {property.description}</p>
                        </Segment>
                        <Segment>
                           <Header dividing size="large" content="Prices" />
                           <Grid columns={2} divided>
                              <Grid.Row>
                                 <Grid.Column>
                                 <h3>Price per night:</h3>
                                 <p>${property.price_per_night}</p>
                                 </Grid.Column>
                                 <Grid.Column>
                                 <h3>Price per week:</h3>
                                 <p>${property.price_per_night}</p>
                                 </Grid.Column>
                            
                              </Grid.Row>

                              <Grid.Row>
                                 <Grid.Column>
                                    <p>Cleaning fee:</p>
                                    <p>${property.cleaning_fee}</p>
                                 </Grid.Column>
                                 <Grid.Column>
                                    <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                                 </Grid.Column>
                                
                              </Grid.Row>
                           </Grid>
                        </Segment>
                        <Segment>
                        <Header dividing size="large" content="Address" />
                           <Grid columns={2} divided>
                              <Grid.Row>
                                 <Grid.Column>
                                 <h3>Street:</h3>
                                 <p>{property.address}</p>
                                 </Grid.Column>
                                 <Grid.Column>
                                 <h3>City:</h3>
                                 <p>{property.city}</p>
                                 </Grid.Column>
                            
                              </Grid.Row>

                              <Grid.Row>
                                 <Grid.Column>
                                 <h3>State:</h3>
                                 <p>{property.state}</p>
                                 </Grid.Column>
                                 <Grid.Column>
                                 <h3>Area:</h3>
                                 <p>{property.area}</p>
                                 </Grid.Column>
                                
                              </Grid.Row>
                           </Grid>
                        
                        
                        </Segment>
                        <Segment>
                        <Grid columns={2} divided>
                              

                              <Grid.Row>
                                 <Grid.Column>
                                 <h3>Features:</h3>
                                 <p> Kitchen <br/> TV<br/> Wheelchair <br/>Accessible<br/>Heating<br/>Hot Tub<br/>Pool<br/> </p>
                                 </Grid.Column>
                                 <Grid.Column>
                                 
                                 <p> Pool is electric heated<br/>WasherDryer<br/>Free Parking on Premises<br/>Wireless Internet<br/>Pets Allowed<br/>Non Smoking<br/>Air Conditioner <br/>BBQ Grill</p>
                                 </Grid.Column>
                                
                              </Grid.Row>
                           </Grid>
                        
                        </Segment>
                        <Segment>1</Segment>
                        <Segment>2</Segment>
                     </Grid.Column>

                  </Grid.Row>
               </Grid>
            </Segment>
            <Segment>
               {/* <DateRangePicker/> */}

            </Segment>
         </div>

      );
   }
}

export default withFirestore(connect(mapState, actions )(SingleProperty));


// let query = propertiesRef.where('title'  )

// {/* <div>
//             <h1>{property.name}</h1>
//             <img src={property.primaryUrl}/>
//          </div> */}