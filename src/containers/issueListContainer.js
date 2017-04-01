import {connect} from 'react-redux';
import {fetchIssues,fetchIssuesSuccess,fetchIssuesFailure} from '.././actions/issues.jsx';
import IssueList from '.././components/IssueList.jsx';

const mapStateToProps=(state)=>{
  return{
    issuesList:state.issues.issuesList
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    fetchIssues:(pageInfo)=>{
      dispatch(fetchIssues(pageInfo)).then((response)=>{
        console.log('response ' ,response.value.data.objdata )
        dispatch(fetchIssuesSuccess(response.value.data.objdata,pageInfo.CurPage));
      })
      .catch((error)=>{
        dispatch(fetchIssuesFailure(error));
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueList);

