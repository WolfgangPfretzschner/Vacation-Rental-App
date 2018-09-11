import { FETCH_PROPS } from "../../actions/types";
const initialPropertyState = {
   properties: ""
};

export default function propertiesReducer(
   state = initialPropertyState,
   action
) {
   switch (action.type) {
      case FETCH_PROPS:
         console.log("%cfrom reducer", "color:orange;font-size:18px", action);
         return { ...state, properties: action.payload };

      default:
         return state;
   }
} 
