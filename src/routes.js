
import React from 'react';
import { Route, IndexRoute ,browserHistory } from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import FormPage from './containers/FormPage';
import TablePage from './containers/TablePage';
import Dashboard from './containers/DashboardPage';


import configureStore from './store/configureStore.jsx';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);


export default (
  <Provider store={store}>
    <Route>
      {/*<Route path="/login" component={LoginPage}/>*/}
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard}/>
        <Route path="dashboard" component={Dashboard}/>
        <Route path="form" component={FormPage}/>
        <Route path="table" component={TablePage}/>
        <Route path="*" component={NotFoundPage}/>
      </Route>
    </Route>
  </Provider>
);

