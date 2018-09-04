import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { reducer as FormReducer } from 'redux-form';
import 'semantic-ui-css/semantic.min.css';
import modalsReducer from '../modals/modalReducer';

import propertiesReducer from "./reducer_properties";
import authReducer from "./reducer_auth";
import asyncReducer from '../async/asyncReducer';

const rootReducer = combineReducers({
   firebase: firebaseReducer,
   firestore: firestoreReducer,
   form: FormReducer,
   properties: propertiesReducer,
   auth: authReducer,
   modals: modalsReducer,
   async: asyncReducer,
});

export default rootReducer;
