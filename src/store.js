import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import rootReducer from '../src/reducers/index';
import thunk from 'redux-thunk'
import firebase from '../src/firebase';

// event listener? tied to whatever calls it?
// disptached object has some user key to figure out the userReducer

const rrfConfig = {
    userProfile: 'users',
    attachAuthIsReady: true,
    useFirestoreForProfile: true
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
        module.hot.accept('../src/reducers', () => {
          const newRootReducer = require('../src/reducers').default;
          store.replaceReducer(newRootReducer);
        });
      }
    }
  
    return store;
  };