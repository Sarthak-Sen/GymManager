import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import "bootstrap/dist/css/bootstrap.min.css"
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import "./styles/index.css"

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();