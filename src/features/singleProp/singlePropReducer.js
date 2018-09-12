import { createReducer } from '../../app/common/util/reducerUtil';
import {  FETCH_BOOKINGS } from './singlePropConstants';

const initialState = [];


export const fetchBookings = (state, payload) => {
   return payload.filteredBookings
}

export default createReducer(initialState, {
   [FETCH_BOOKINGS]: fetchBookings
}) 