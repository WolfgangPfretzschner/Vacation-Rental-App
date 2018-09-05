// import PropertyAdapter from "../apis/adapter";
import { FETCH_PROPS } from "../actions/types";



export function fetchProperties() {
   return dispatch => {
      dispatch({
         type: FETCH_PROPS,
         payload: "",
      });
   };
}

