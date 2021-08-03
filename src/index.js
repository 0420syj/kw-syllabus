import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Scrollbars } from 'react-custom-scrollbars';

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
);

render(
  <Provider store={store}>
    <Scrollbars
      autoHeight
      autoHeightMin={`100vh`}
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal>
      <App />
    </Scrollbars>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
