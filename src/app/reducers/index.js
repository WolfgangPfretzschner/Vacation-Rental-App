import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { reducer as FormReducer } from 'redux-form';
import 'semantic-ui-css/semantic.min.css';
import modalsReducer from '../../modals/modalReducer';

import propertiesReducer from "./reducer_properties";
import authReducer from "./reducer_auth";
import asyncReducer from '../../async/asyncReducer';
import eventReducer from '../../features/event/eventReducer';
import testReducer from '../../features/testarea/testReducer';
import { reducer as toastrReducer } from 'react-redux-toastr';

const rootReducer = combineReducers({
   firebase: firebaseReducer,
   firestore: firestoreReducer,
   form: FormReducer,
   properties: propertiesReducer,
   auth: authReducer,
   modals: modalsReducer,
   async: asyncReducer,
   events: eventReducer,
   test: testReducer,
   toastr: toastrReducer
});

export default rootReducer;
