import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import UserReducer from './loginReducer.jsx';
import   ProjectReducer from './projectReducer.jsx'
import ModulesReducer from './modulesReducer.jsx'
import { reducer as formReducer}  from 'redux-form'
import { reducer as notifReducer } from 'redux-notifications';

const rootReducer = combineReducers({
  user : UserReducer,
  projects: ProjectReducer,
  modules:ModulesReducer,
  form: formReducer ,
  notifs: notifReducer,
  routing: routerReducer
});

export default rootReducer;
