import { createReducer } from '../../app/common/util/reducerUtil';
import { CREATE_EVENT, DELETE_EVENT,  FETCH_EVENTS } from './eventConstants';

 const initialState = [];

export const createBooking = (state, payload) => {
  return [...state, Object.assign({}, payload.event)]
}

export const deleteEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.eventId)
  ]
}

export const fetchEvents = (state, payload) => {
  return payload.events
}

export default createReducer(initialState, {
  [CREATE_EVENT]: createBooking,
  [DELETE_EVENT]: deleteEvent,
  [FETCH_EVENTS]: fetchEvents
})