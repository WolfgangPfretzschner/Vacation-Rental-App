import { createReducer } from '../../app/common/util/reducerUtil';
import { FETCH_PROPS, CLEAR_SEARCH } from './propertySearchConstants';

const initialState = [];

export const fetchProps = (state, payload) => {
   return payload.res
}

export const clearSearch = (state, payload) => {
   return []
}

export default createReducer(initialState, {
   [FETCH_PROPS]: fetchProps,
   [CLEAR_SEARCH]: clearSearch

}) 