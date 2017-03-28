import {connect} from 'react-redux';
import {addProject,addProjectSuccess,addProjectFailue ,fetchProjectType,fetchProjectTypeSuccess,fetchProjectTypeFailure} from '../actions/project.jsx';
import NewProject from '../components/newProject.jsx';

const mapStateToProps=(state)=>{
  return{
    projectTypeList:state.projects.projectTypeList,
    newProject:state.projects.newProject,
    aysncValidate:state.projects.aysncValidate
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{

    fetchProjectType:()=>{
      dispatch(fetchProjectType()).then((response)=>{
        !response.error ? dispatch(fetchProjectTypeSuccess(response.value.data.objdata)):dispatch(fetchProjectTypeFailure(response.payload.data))
      });
    }

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewProject);