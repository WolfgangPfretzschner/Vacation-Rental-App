import { toastr } from 'react-redux-toastr';
import { asyncActionStart, asyncActionFinish } from '../../async/asyncActions';
import { closeModal } from '../../modals/modalActions'
import { createNewBooking } from '../../app/common/util/helpers';
import { property1 ,property2,property3,property4,property5,property6, } from './PropertiesList/seedProperties';

export const createBooking = booking =>
   async (dispatch, getState, { getFirebase, getFirestore }) => {
     dispatch(asyncActionStart())
      const firestore = getFirestore();
      const firebase = getFirebase();
      const user = firebase.auth().currentUser;
      const photoURL = getState().firebase.profile.photoURL;
      let newBooking = createNewBooking(user, photoURL, booking);
      try {
         await firestore.add(`bookings`, newBooking);
         dispatch(asyncActionFinish())
         dispatch(closeModal())
         toastr.success('Success', 'Boking has been created');
      } catch (error) {
         toastr.error('Oops', 'Something went wrong');
      }
   };
;
 
export const seedProperties = ()  => 
async (dispatch, getState, { getFirebase, getFirestore }) => {
   const firestore = getFirestore();
   const firebase = getFirebase();
   try {
         await firestore.add(`properties`, property1);
         toastr.success('Success', 'Boking has been created')
      } catch (error) {
         toastr.error('Oops', 'Something went wrong');
      }
      try {
         await firestore.add(`properties`, property2);
         toastr.success('Success', 'Boking has been created')
      } catch (error) {
         toastr.error('Oops', 'Something went wrong');
      }
      try {
         await firestore.add(`properties`, property3);
         toastr.success('Success', 'Boking has been created')
      } catch (error) {
         toastr.error('Oops', 'Something went wrong');
      }
      try {
         await firestore.add(`properties`, property4);
         toastr.success('Success', 'Boking has been created')
      } catch (error) {
         toastr.error('Oops', 'Something went wrong');
      }
      try {
         await firestore.add(`properties`, property5);
         toastr.success('Success', 'Boking has been created')
      } catch (error) {
         toastr.error('Oops', 'Something went wrong');
      }
      try {
         await firestore.add(`properties`, property6);
         toastr.success('Success', 'Boking has been created')
      } catch (error) {
         toastr.error('Oops', 'Something went wrong');
      }
};



