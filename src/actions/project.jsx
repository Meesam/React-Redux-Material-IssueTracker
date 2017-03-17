  import axios from 'axios';
  import URL from '../../appconfig';
  // Project List
  export const FETCH_PROJECT = "FETCH_PROJECT" ;
  export const FETCH_PROJECT_SUCCESS = "FETCH_PROJECT_SUCCESS";
  export const FETCH_PROJECT_FAILURE = "FETCH_PROJECT_FAILURE";
  export const RESETS_PROJECT = "RESETS_PROJECT";
  export const FETCH_PROJECT_BY_ID="FETCH_PROJECT_BY_ID";
  export const FETCH_PROJECT_BY_ID_SUCCESS="FETCH_PROJECT_BY_ID_SUCCESS";
  export const FETCH_PROJECT_BY_ID_FAILURE="FETCH_PROJECT_BY_ID_FAILURE";

  export function fetchProject() {
    const request=axios({
      url:`${URL.ROOT_URL}/project`,
      method:'POST',
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
      url:`${URL.ROOT_URL}/project/${projectId}`,
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
