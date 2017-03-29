import {connect} from 'react-redux';
import {fectchProjectById,fetchProjectByIdSuccess,fetchProjectByIdFailure ,fetchProjectType,fetchProjectTypeSuccess,fetchProjectTypeFailure} from '../actions/project.jsx';
import NewProject from '../components/newProject.jsx';

const mapStateToProps=(state,ownProps)=>{
  return{
    projectTypeList:state.projects.projectTypeList,
    newProject:state.projects.newProject,
    aysncValidate:state.projects.aysncValidate,
    projectId:ownProps.id,
    project:state.projects.project.projectData[0],
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{

    fetchProjectType:()=>{
      dispatch(fetchProjectType()).then((response)=>{
        dispatch(fetchProjectTypeSuccess(response.value.data.objdata))
      })
      .catch((error)=>{
        dispatch(fetchProjectTypeFailure(error))
      })
    },

    fectchProjectById:(projectId)=>{
      dispatch(fectchProjectById(projectId))
        .then((response)=> {
          dispatch(fetchProjectByIdSuccess(response.value.data.objdata))//dispatch(fetchProjectByIdFailure(response.payload.data))
        })
        .catch((error)=>{
          dispatch(fetchProjectByIdFailure(error))
        })
    }

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewProject);
