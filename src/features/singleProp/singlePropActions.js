import firebase from "../../firebase";
import { FETCH_BOOKINGS } from '../../features/singleProp/singlePropConstants';


export const fetchBookingsForProp = (name) =>
   async (dispatch, getState) => {
      let today = Date.now()
      let ttoday = new Date(Date.now())
      const firestore = firebase.firestore();
      const bookings1 = firestore.collection("bookings").where("checkin_date", ">=", ttoday)
      try {
         let bookings1Snap = await bookings1.get();
         let data = [];
         for (let i = 0; i < bookings1Snap.docs.length; i++) {
            let dat = { ...bookings1Snap.docs[i].data(), id: bookings1Snap.docs[i].id };
            data.push(dat);
         }
         let filteredBookings = data.filter(obj => obj.name === name)


         dispatch({ type: FETCH_BOOKINGS, payload: { filteredBookings } })
      } catch (error) {
         console.log(error);
      }
   }