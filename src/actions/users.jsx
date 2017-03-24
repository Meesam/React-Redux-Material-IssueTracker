import axios from 'axios';
import URL from '../../appconfig';

export const FETCH_USERS="FETCH_USERS";
export const FETCH_USERS_SUCCESS="FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE="FETCH_USERS_FAILURE";
export const NEW_USERS="NEW_USERS";
export const NEW_USERS_SUCCESS="NEW_USERS_SUCCESS";
export const NEW_USERS_FAILURE="NEW_USERS_FAILURE";

export function fetchUsers() {
  const request=axios({
    url:`${URL.ROOT_URL}/allusers`,
    method:'POST',
    Headers:[]
  });
  return{
    type:FETCH_USERS,
    payload:request
  }
}

export function fetchUsersSuccess(users) {
  return{
    type:FETCH_USERS_SUCCESS,
    payload:users
  }
}

export function fetchUsersFailure(error) {
  return{
    type:FETCH_USERS_FAILURE,
    payload:error
  }
}

export function newUsers(formValues) {
  const request = axios({
    method: 'post',
    data: formValues,
    url: `${URL.ROOT_URL}/user/add`,
    headers: []
  });
  return {
    type: NEW_USERS,
    payload: request
  }
}

export function newUsersSuccess(response) {
  return {
    type: NEW_USERS_SUCCESS,
    payload: response
  }
}

export function newUsersFailue(error) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}
