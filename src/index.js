// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Home from './Components/Home/Home';
// import registerServiceWorker from './registerServiceWorker';
// ReactDOM.render(<TextFields/> , document.getElementById('root'));

// registerServiceWorker();


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import UserCoupon from './Components/Coupon/UserCoupon'

import './index.css';
import reducers from "./reducers/authReducer";
import App from './App';

const store = createStore(
  reducers, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<UserCoupon />, document.getElementById('root'));

