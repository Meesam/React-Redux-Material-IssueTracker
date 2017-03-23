import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import UserReducer from './loginReducer.jsx';
import ProjectReducer from './projectReducer.jsx'
import ModulesReducer from './modulesReducer.jsx'
import { reducer as formReducer}  from 'redux-form'
import DataReducer from './dataReducer.jsx';
import SystemUserReducer from './userReducer.jsx';

const rootReducer = combineReducers({
  user : UserReducer,
  projects: ProjectReducer,
  modules:ModulesReducer,
  data:DataReducer,
  systemUser:SystemUserReducer,
  form: formReducer ,
  routing: routerReducer
});

export default rootReducer;
