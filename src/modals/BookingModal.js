import React, {Component} from 'react';
import {Modal} from 'semantic-ui-react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import {closeModal} from "./modalActions";
import EventForm from '../features/event/EventForm/EventForm';

const actions = {closeModal};

class BookingModal extends Component {
   render() {
      return (
         <Modal
            size='mini'
            open={true}
            onClose={this.props.closeModal}
         >
            <Modal.Header>
               Book this Property!
                </Modal.Header>
            <Modal.Content>
               <Modal.Description>
                  <EventForm name={this.props.name} 
                  close={this.props.closeModal} 
                  dateRanges={this.props.dateRanges} folded={this.props.folded} 
                  // pro={this.pro}
                  />
               </Modal.Description>
            </Modal.Content>
         </Modal>
      );
   }
}

export default withRouter(connect(null, actions)(BookingModal));