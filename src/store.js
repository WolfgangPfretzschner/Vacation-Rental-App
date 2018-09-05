import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import rootReducer from './app/reducers/index';
import thunk from 'redux-thunk'
import firebase from './firebase';
// import 'firebase/auth'
// import 'firebase/database'
// import 'firebase/firestore'

// event listener? tied to whatever calls it?
// disptached object has some user key to figure out the userReducer

const rrfConfig = {
   userProfile: 'users',
   attachAuthIsReady: true,
   useFirestoreForProfile: true,
   updateProfileOnLogin: false
 };



export const configureStore = preloadedState => {
    const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];
    const middlewareEnhancer = applyMiddleware(...middlewares);
  
    const storeEnhancers = [middlewareEnhancer];
  
    const composedEnhancer = composeWithDevTools(
      ...storeEnhancers,
      reactReduxFirebase(firebase, rrfConfig),
      reduxFirestore(firebase)
    );
  
    const store = createStore(rootReducer, preloadedState, composedEnhancer);
  
    if (process.env.NODE_ENV !== 'production') {
      if (module.hot) {
        module.hot.accept('./app/reducers/index', () => {
          const newRootReducer = require('./app/reducers/index').default;
          store.replaceReducer(newRootReducer);
        });
      }
    }
  
    return store;
  };