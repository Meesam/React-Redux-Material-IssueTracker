import axios from 'axios';
import URL from '../../appconfig';

//Login

export const ON_INITIAL_STATE="ON_INITIAL_STATE";
export const ON_LOGIN="ON_LOGIN";
export const ON_LOGIN_SUCCESS="ON_LOGIN_SUCCESS";
export const ON_LOGIN_FAILURE="ON_LOGIN_FAILURE";
export const RESET_LOGIN="RESET_LOGIN";

export function onInitialState(){
  return{
    type:ON_INITIAL_STATE
  }
}

export function onLogin(formValues) {
  const request = axios({
    method: 'post',
    data: formValues,
    url: `${URL.ROOT_URL}/login`,
    headers: []
  });
  return {
    type: ON_LOGIN,
    payload: request
  }
}

export function onLoginSuccess(user){
	return{
		type:ON_LOGIN_SUCCESS,
		payload:user
	}
}

export function onLoginFailure(error){
   return {
    type:ON_LOGIN_FAILURE,
    payload:error

   }
}


export function resetLogin() {
  return {
    type: RESET_LOGIN,
  };
}
