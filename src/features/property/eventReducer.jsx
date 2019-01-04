import { createReducer } from '../../app/common/util/reducerUtil';
import { CREATE_EVENT } from './eventConstants';

 const initialState = [];

export const createBooking = (state, payload) => {
  return [...state, Object.assign({}, payload.event)]
}


export default createReducer(initialState, {
  [CREATE_EVENT]: createBooking,

})