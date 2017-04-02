import axios from 'axios';
import URL from '../../appconfig';
import {
  Spinner, // The React component
  pendingTasksReducer, // The redux reducer
  pendingTask, // The action key for modifying loading state
  begin, // The action value if a "long" running task begun
  end // The action value if a "long" running task ended
} from 'react-redux-spinner';

export const FETCH_ISSUES="FETCH_ISSUES";
export const FETCH_ISSUES_SUCCESS="FETCH_ISSUES_SUCCESS";
export const FETCH_ISSUES_FAILURE="FETCH_ISSUES_FAILURE";
export const ADD_ISSUE="ADD_ISSUE";
export const ADD_ISSUE_SUCCESS="ADD_ISSUE_SUCCESS";
export const ADD_ISSUE_FAILURE="ADD_ISSUE_FAILURE";
export const FETCH_ISSUE_BY_ID="FETCH_ISSUE_BY_ID";
export const FETCH_ISSUE_BY_ID_SUCCESS="FETCH_ISSUE_BY_ID_SUCCESS";
export const FETCH_ISSUE_BY_ID_FAILURE="FETCH_ISSUE_BY_ID_FAILURE";

const aTableInfo={
  CurPage:1,
  RPP:5,
}

export function fetchIssues(pageInfo=null) {
  const request=axios({
    url:`${URL.ROOT_URL}/issues`,
    method:'POST',
    data:pageInfo ? pageInfo : aTableInfo,
    Headers:[]
  });
  return{
    type:FETCH_ISSUES,
    payload:request,
    [ pendingTask ]: begin
  }
}

export function fetchIssuesSuccess(issues, curpage) {
  return{
    type:FETCH_ISSUES_SUCCESS,
    payload:{
      issues:issues,
      curPage:curpage
    },
    [ pendingTask ]: end
  }
}

export function fetchIssuesFailure(error) {
  return{
    type:FETCH_ISSUES_FAILURE,
    payload:error
  }
}

export function addIssue(formValues) {
  const request=axios({
    url:`${URL.ROOT_URL}/issues/add`,
    method:'POST',
    data:formValues,
    Headers:[]
  });
  return{
    type:ADD_ISSUE,
    payload:request,
    [ pendingTask ]: begin
  }
}

export function addIssueSuccess(response) {
  return {
    type:ADD_ISSUE_SUCCESS,
    payload:response,
    [ pendingTask ]: begin
  }
}

export function addIssueFailure(error) {
  return{
    type:ADD_ISSUE_FAILURE,
    payload:error
  }
}

export function fetchIssueById(issueId) {
  const request=axios({
    url:`${URL.ROOT_URL}/issues/${issueId}`,
    method:'GET',
    Headers:[]
  });
  return{
    type:FETCH_ISSUE_BY_ID,
    payload:request
  }
}

export function fetchIssueByIdSuccess(issue) {
  return{
    type:FETCH_ISSUE_BY_ID_SUCCESS,
    payload:issue
  }
}

export function fetchIssueByIdFailure(error) {
  return{
    type:FETCH_ISSUE_BY_ID_FAILURE,
    payload:error
  }
}


