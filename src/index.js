import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from "./store";
import ReduxToastr from 'react-redux-toastr'
import ScrollToTop from './app/common/util/ScrollToTop';
// import './assets/css/brooke.css';
import './index.css';
const store = configureStore();

// import createHistory from 'history/createBrowserHistory';
// import { ConnectedRouter } from 'react-router-redux';
// const history = createHistory();
// const store = configureStore(initialState, history);

const rootEl = document.getElementById('root');
let render = () => {
   ReactDOM.render(
      <Provider store={store}>
         <Router>
            <ScrollToTop>
               <ReduxToastr
                  position='bottom-right'
                  transitionIn='fadeIn'
                  transitionOut='fadeOut'
               />
               <App />
            </ScrollToTop>
         </Router>
      </Provider>,
      rootEl
   );
}

registerServiceWorker();

if (module.hot) {
   module.hot.accept('./components/App.js', () => {
      setTimeout(render);
   });
}

store.firebaseAuthIsReady.then(() => {
   render();
   registerServiceWorker();
})