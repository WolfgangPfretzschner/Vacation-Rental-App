import firebase from "../../firebase";
import { toastr } from 'react-redux-toastr';
import { FETCH_PROPS } from './propertySearchConstants';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../async/asyncActions';

export const searchForAvailableProperties = (inputValues) => 
   async (dispatch, getState) => {
      //console.log("%cinputValues","color:green;font-size:18px",inputValues)
      let today =Date.now()
      let ttoday = new Date(Date.now())
      const firestore = firebase.firestore();
      // let bookings1 = firestore.collection("bookings").where("checkin_date", ">=" , ttoday)
      const query1 = firestore.collection("bookings").where("checkin_date" ,"<=", inputValues.datesToSearch.end._d)
      const query2 = firestore.collection("bookings").where("checkin_date" ,">=",inputValues.datesToSearch.start._d)
      const query3 = firestore.collection("bookings").where("checkout_date" ,"<=",inputValues.datesToSearch.end._d)
      const query4 = firestore.collection("bookings").where("checkout_date" ,">=",inputValues.datesToSearch.start._d)
      const query5 = firestore.collection("bookings").where("checkin_date" ,"<=",inputValues.datesToSearch.start._d)
      const query6 = firestore.collection("bookings").where("checkout_date" ,">=",inputValues.datesToSearch.end._d)
      const properties = firestore.collection('properties')
      try {
         let query1Snap = await query1.get();
         let bookings1 = [];
         for (let i = 0; i < query1Snap.docs.length; i++) {
            let dat = { ...query1Snap.docs[i].data(), id: query1Snap.docs[i].id };
            bookings1.push(dat);
         }
         let query2Snap = await query2.get();
         let bookings2 = [];
         for (let i = 0; i < query2Snap.docs.length; i++) {
            let dat = { ...query2Snap.docs[i].data(), id: query2Snap.docs[i].id };
            bookings2.push(dat);
         }
         let query3Snap = await query3.get();
         let bookings3= [];
         for (let i = 0; i < query3Snap.docs.length; i++) {
            let dat = { ...query3Snap.docs[i].data(), id: query3Snap.docs[i].id };
            bookings3.push(dat);
         }
         let query4Snap = await query4.get();
         let bookings4 = [];
         for (let i = 0; i < query4Snap.docs.length; i++) {
            let dat = { ...query4Snap.docs[i].data(), id: query4Snap.docs[i].id };
            bookings4.push(dat);
         }
         let query5Snap = await query5.get();
         let bookings5 = [];
         for (let i = 0; i < query5Snap.docs.length; i++) {
            let dat = { ...query5Snap.docs[i].data(), id: query5Snap.docs[i].id };
            bookings5.push(dat);
         }
         let query6Snap = await query6.get();
         let bookings6 = [];
         for (let i = 0; i < query6Snap.docs.length; i++) {
            let dat = { ...query6Snap.docs[i].data(), id: query6Snap.docs[i].id };
            bookings6.push(dat);
         }
        
         let filter1 = bookings1.filter( book => bookings2.map(book2 => book2.id).includes(book.id) )
         let filter2 = bookings3.filter( book => bookings4.map(book2 => book2.id).includes(book.id) )
         let filter3 = bookings2.filter( book => bookings3.map(book2 => book2.id).includes(book.id) )
         let filter4 = bookings5.filter( book => bookings6.map(book2 => book2.id).includes(book.id) )
         
         let allUnavailable = filter1.concat(filter2).concat(filter3).concat(filter4)
         
         let properties1Snap = await properties.get();
         let props = [];
         for (let i = 0; i < properties1Snap.docs.length; i++) {
            let dat = { ...properties1Snap.docs[i].data(), id: properties1Snap.docs[i].id };
            props.push(dat);
         }
         let unique = [...new Set(allUnavailable)]
         
         let res = props.filter(prop => !allUnavailable.map(obj => obj.name).includes(prop.name) && 
                           Number(prop.bedrooms) >= Number(inputValues.rooms) &&
                           prop.city === inputValues.city
                           )
         // if(res.length === 0 ){
         //    res = "No homes available"
         // }
         // debugger
         //console.log("%cquery log", "color:purple;font-size:18px", res);
         dispatch({type: FETCH_PROPS, payload:{res} })
      } catch (error) {
         console.log(error);
      }
   };
 



