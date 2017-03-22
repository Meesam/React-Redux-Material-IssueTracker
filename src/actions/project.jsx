  import axios from 'axios';
  import URL from '../../appconfig';

  export const FETCH_PROJECT = "FETCH_PROJECT" ;
  export const FETCH_PROJECT_SUCCESS = "FETCH_PROJECT_SUCCESS";
  export const FETCH_PROJECT_FAILURE = "FETCH_PROJECT_FAILURE";
  export const RESETS_PROJECT = "RESETS_PROJECT";
  export const FETCH_PROJECT_BY_ID="FETCH_PROJECT_BY_ID";
  export const FETCH_PROJECT_BY_ID_SUCCESS="FETCH_PROJECT_BY_ID_SUCCESS";
  export const FETCH_PROJECT_BY_ID_FAILURE="FETCH_PROJECT_BY_ID_FAILURE";
  export const ADD_PROJECT="ADD_PROJECT";
  export const ADD_PROJECT_SUCCESS="ADD_PROJECT_SUCCESS";
  export const ADD_PROJECT_FAILURE="ADD_PROJECT_FAILURE";
  export const FETCH_PROJECTTYPE="FETCH_PROJECTTYPE";
  export const FETCH_PROJECTTYPE_SUCCESS="FETCH_PROJECTTYPE_SUCCESS";
  export const FETCH_PROJECTTYPE_FAILURE="FETCH_PROJECTTYPE_FAILURE";

  export function fetchProject(pageInfo) {
    const request=axios({
      url:`${URL.ROOT_URL}/project`,
      method:'POST',
      data:pageInfo,
      Headers:[]
    });
    return{
      type:FETCH_PROJECT,
      payload:request
    }
  }

  export function fetchProjectSuccess(projects) {
    return{
      type:FETCH_PROJECT_SUCCESS,
      payload:projects
    }
  }

  export function fetchProjectFailure(error) {
    return{
      type:FETCH_PROJECT_FAILURE,
      payload:error
    }
  }

  export function fectchProjectById(projectId) {
    const request=axios({
      url:`${URL.ROOT_URL}/projects/${projectId}`,
      method:'GET',
      Headers:[]
    });
    return{
      type:FETCH_PROJECT_BY_ID,
      payload:request
    }
  }

  export function fetchProjectByIdSuccess(project) {
    return{
      type:FETCH_PROJECT_BY_ID_SUCCESS,
      payload:project
    }
  }

  export function fetchProjectByIdFailure(error) {
    return{
      type:FETCH_PROJECT_BY_ID_FAILURE,
      payload:error
    }
  }

  export function addProject(formValues) {
    const request = axios({
      method: 'post',
      data: formValues,
      url: `${URL.ROOT_URL}/projects/add`,
      headers: []
    });
    return {
      type: ADD_PROJECT,
      payload: request
    }
  }

  export function addProjectSuccess(response) {
    return {
      type: ADD_PROJECT_SUCCESS,
      payload: response
    }
  }

  export function addProjectFailue(error) {
    return {
      type: ADD_PROJECT_FAILURE,
      payload: error
    }
  }

  export function fetchProjectType(){
    const request=axios({
      url:`${URL.ROOT_URL}/projecttype`,
      method:'GET',
      Headers:[]
    });
    return{
      type:FETCH_PROJECTTYPE,
      payload:request
    }
  }

  export function fetchProjectTypeSuccess(projectTypes){
    return{
      type:FETCH_PROJECTTYPE_SUCCESS,
      payload:projectTypes
    }
  }

  export function fetchProjectTypeFailure(error){
    return{
      type:FETCH_PROJECTTYPE_FAILURE,
      payload:error
    }
  }
