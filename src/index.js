import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import './index.scss';
import App from './App/App';

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

serviceWorker.unregister();
