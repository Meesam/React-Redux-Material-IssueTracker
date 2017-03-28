import {connect} from 'react-redux';
import {fectchProjectById,fetchProjectByIdSuccess,fetchProjectByIdFailure ,fetchProjectType,fetchProjectTypeSuccess,fetchProjectTypeFailure} from '../actions/project.jsx';
import NewProject from '../components/newProject.jsx';

const mapStateToProps=(state,ownProps)=>{
  return{
    projectTypeList:state.projects.projectTypeList,
    newProject:state.projects.newProject,
    aysncValidate:state.projects.aysncValidate,
    projectId:ownProps.id,
    project:state.projects.projects,
    initialValues: state.projects.projects
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{

    fetchProjectType:()=>{
      dispatch(fetchProjectType()).then((response)=>{
        !response.error ? dispatch(fetchProjectTypeSuccess(response.value.data.objdata)):dispatch(fetchProjectTypeFailure(response.payload.data))
      });
    },

    fectchProjectById:(projectId)=>{
      dispatch(fectchProjectById(projectId))
        .then((response)=> {
          !response.error ? dispatch(fetchProjectByIdSuccess(response.value.data.objdata)):dispatch(fetchProjectByIdFailure(response.payload.data))
        })
    }

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewProject);
