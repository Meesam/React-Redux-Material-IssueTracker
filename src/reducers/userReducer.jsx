// Get Type from action directory
import {FETCH_USERS,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE,NEW_USERS,NEW_USERS_SUCCESS,NEW_USERS_FAILURE} from '../actions/users.jsx'

const INITIAL_STATE = {
  userList:{users:[],error:null,loading:false},
  newUser:{success:null,error:null,loading:false},
};

export default function (state = INITIAL_STATE, action) {
  let error;
  switch (action.type){
    case FETCH_USERS:
      return {...state,userList:{users:[],error:null,loading:true}}

    case FETCH_USERS_SUCCESS:
      return {...state,userList:{users:action.payload,error:null,loading:false}}

    case FETCH_USERS_FAILURE:
      error = action.payload || {message: action.payload.message};
      return{...state,userList:{users:[],error:error,loading:false}};

    case NEW_USERS:
      return {...state,newUser:{success:null,error:null,loading:true}};

    case NEW_USERS_SUCCESS:
      return {...state,newUser:{success:action.payload,error:null,loading:false}};

    case NEW_USERS_FAILURE:
      error = action.payload || {message: action.payload.message};
      return{...state,newUser:{success:null,error:error,loading:false}};

    default:
      return state;

  }

}
