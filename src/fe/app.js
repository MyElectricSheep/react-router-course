import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom'

const root = document.getElementById('app-container');

const renderApp = () => {
  ReactDOM.render(
    <AppContainer>
      <Router>
        <App />
      </Router>
    </AppContainer>,
    root,
  );
};

renderApp();

// Hot module reloading
if (module.hot) {
  module.hot.accept('./components/App', renderApp);
}
