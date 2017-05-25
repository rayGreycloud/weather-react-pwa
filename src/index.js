import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// import reducers from './reducers';
//
// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
//
// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.getElementById('root'));


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
