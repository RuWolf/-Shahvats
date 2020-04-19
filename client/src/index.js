import React from 'react';
import ReactDOM from 'react-dom';
import {StoreContext} from 'storeon/react'
import App from './App';


ReactDOM.render(
  <StoreContext.Provider>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </StoreContext.Provider>,
  document.getElementById('root')
);
