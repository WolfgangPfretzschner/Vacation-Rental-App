import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from "./store";
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
            <App />
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