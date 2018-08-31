import { combineReducers } from "redux";
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore'

import propertiesReducer from './reducer_properties'

const rootReducer =  combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    properties: propertiesReducer,

    })

export default rootReducer