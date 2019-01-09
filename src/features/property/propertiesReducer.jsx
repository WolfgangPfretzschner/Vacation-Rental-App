import { createReducer } from '../../app/common/util/reducerUtil';
import { CREATE_BOOKING } from './propertiesConstants';

 const initialState = [];

export const createBooking = (state, payload) => {
  return [...state, Object.assign({}, payload.event)]
}


export default createReducer(initialState, {
  [CREATE_BOOKING]: createBooking,

})