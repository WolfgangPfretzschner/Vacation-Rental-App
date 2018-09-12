import { createReducer } from '../../app/common/util/reducerUtil';
import { FETCH_PROPS, FETCH_BOOKINGS } from './propertySearchConstants';

const initialState = [];

export const fetchProps = (state, payload) => {
   return payload.res
}


export default createReducer(initialState, {
   [FETCH_PROPS]: fetchProps,

}) 