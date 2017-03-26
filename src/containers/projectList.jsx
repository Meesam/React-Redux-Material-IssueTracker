import {connect} from 'react-redux';
import {fetchProject,fetchProjectSuccess,fetchProjectFailure} from '.././actions/project.jsx';
import ProjectList from '.././components/projectList.jsx';

const mapStateToProps=(state)=>{
  return{
    projectList:state.projects.projectList
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
     fetchProject:(pageInfo)=>{
        dispatch(fetchProject(pageInfo)).then((response)=>{
          !response.error ? dispatch(fetchProjectSuccess(response.value.data.objdata,pageInfo.CurPage)):dispatch(fetchProjectFailure(response.payload.data))
        });
     },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);

