import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import {configureStore} from './store'

const store = configureStore()

// import './assets/css/brooke.css';
// import createHistory from 'history/createBrowserHistory';
// import { ConnectedRouter } from 'react-router-redux';
// const history = createHistory();
// const store = configureStore(initialState, history);



ReactDOM.render(<Provider store={store}><Router ><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();

// if (module.hot) {
//     module.hot.accept('./app/layout/App', () => {
//       setTimeout(render);
//     });
//   }