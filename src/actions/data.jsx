import axios from 'axios';
import URL from '../../appconfig';

// Modules List
export const FETCH_DATA="FETCH_DATA";
export const FETCH_DATA_SUCCESS="FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE="FETCH_DATA_FAILURE";


export function fetchData() {
  const request=axios({
    url:`${URL.ROOT_URL}/project`,
    method:'POST',
    headers:[]
  });
  return{
    type:FETCH_DATA,
    payload:request
  }
}

export function fetchDataSuccess(modules) {
  return{
    type:FETCH_DATA_SUCCESS,
    payload:modules
  }
}

export function fetchDataFailure(error) {
  return{
    type:FETCH_DATA_FAILURE,
    payload:error
  }
}



