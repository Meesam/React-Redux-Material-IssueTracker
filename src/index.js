import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory,Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
require('./favicon.ico');
import './styles.scss';
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';
import { syncHistoryWithStore} from 'react-router-redux';
import App from './pages/appIndex.jsx';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './pages/loginIndex.jsx';
import FormPage from './containers/FormPage';
import TablePage from './containers/TablePage';
import Dashboard from './containers/DashboardPage';
import configureStore from './store/configureStore.jsx';
import ProjectList from './pages/projectIndex.jsx';
import ViewProjectIndex from './pages/viewProjectIndex.jsx'
import NewProject from './pages/newProjectIndex.jsx';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="login" component={LoginPage}/>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard}/>
        <Route path="dashboard" component={Dashboard}/>
        <Route path="form" component={FormPage}/>
        <Route path="table" component={TablePage}/>
        <Route path="project" component={ProjectList}/>
        <Route path="project/:Id" component={ViewProjectIndex}/>
        <Route path="newproject" component={NewProject}/>
        <Route path="*" component={NotFoundPage}/>
      </Route>
    </Router>
  </Provider>, document.getElementById('app')
);







