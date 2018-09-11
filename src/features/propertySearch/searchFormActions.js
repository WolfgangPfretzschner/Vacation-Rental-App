import firebase from "../../firebase";
import { toastr } from 'react-redux-toastr';
import { FETCH_PROPS } from './propertySearchConstants';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../async/asyncActions';

export const searchForAvailableProperties = (inputValues) => 
   async (dispatch, getState) => {
      console.log("%cinputValues","color:green;font-size:18px",inputValues)
      let today =Date.now()
      let ttoday = new Date(Date.now())
      const firestore = firebase.firestore();
      // let bookings1 = firestore.collection("bookings").where("checkin_date", ">=" , ttoday)
      const bookings1 = firestore.collection("bookings").where("checkin_date" ,">=", inputValues.datesToSearch.end._d)
      const bookings2 = firestore.collection("bookings").where("checkout_date" ,"<=", inputValues.datesToSearch.start._d)
      const properties = firestore.collection('properties')
      // debugger
      console.log( "%chello from actions", "color:red;font-size:18px", bookings1 );
      try {
         let bookings1Snap = await bookings1.get();
         let data = [];
         for (let i = 0; i < bookings1Snap.docs.length; i++) {
            let dat = { ...bookings1Snap.docs[i].data(), id: bookings1Snap.docs[i].id };
            data.push(dat);
         }
         let bookings2Snap = await bookings2.get();
         let data2 = [];
         for (let i = 0; i < bookings2Snap.docs.length; i++) {
            let dat = { ...bookings2Snap.docs[i].data(), id: bookings2Snap.docs[i].id };
            data2.push(dat);
         }
         let all = data.concat(data2)

         let properties1Snap = await properties.get();
         let props = [];
         for (let i = 0; i < properties1Snap.docs.length; i++) {
            let dat = { ...properties1Snap.docs[i].data(), id: properties1Snap.docs[i].id };
            props.push(dat);
         }
         let res = props.filter(prop => all.map(obj => obj.category).includes(prop.name) )
         debugger

         console.log("%cquery log", "color:purple;font-size:18px", res);
         dispatch({type: FETCH_PROPS, payload:{res} })
      } catch (error) {
         console.log(error);
      }
   };
;
