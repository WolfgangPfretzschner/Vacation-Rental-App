import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { reducer as FormReducer } from 'redux-form';

import 'semantic-ui-css/semantic.min.css';

import modalsReducer from '../../modals/modalReducer';
import asyncReducer from '../../async/asyncReducer';
import propertiesReducer from '../../features/property/propertiesReducer';
import testReducer from '../../features/testarea/testReducer';
import searchReducer from '../../features/propertySearch/propertySearchReducer';
import { reducer as toastrReducer } from 'react-redux-toastr';
import bookingsReducer from '../../features/singleProp/singlePropReducer'

const rootReducer = combineReducers({
   firebase: firebaseReducer,
   firestore: firestoreReducer,
   form: FormReducer,
   modals: modalsReducer,
   async: asyncReducer,
   properties: propertiesReducer,
   test: testReducer,
   toastr: toastrReducer,
   search: searchReducer,
   bookings: bookingsReducer
});

export default rootReducer;
  