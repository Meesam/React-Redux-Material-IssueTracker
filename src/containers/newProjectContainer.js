import React,{PropTypes,Component} from 'react';
import {connect} from 'react-redux';
import {fectchProjectById,fetchProjectByIdSuccess,fetchProjectByIdFailure ,fetchProjectType,fetchProjectTypeSuccess,fetchProjectTypeFailure} from '../actions/project.jsx';
import NewProject from '../components/newProject.jsx';


const mapStateToProps=(state,ownProps)=> {
  return{
    projectList:state.projects.projectList,
    projectTypeList:state.projects.projectTypeList,
    newProject:state.projects.newProject,
    aysncValidate:state.projects.aysncValidate,
    projectId:ownProps.id,
    initialValues:{
      _id:state.projects.project.projectData._id,
      ProjectName:state.projects.project.projectData.ProjectName,
      ProjectType:state.projects.project.projectData.ProjectType,
      StartDate:state.projects.project.projectData.StartDate,
      EndDate:state.projects.project.projectData.StartDate,
      Description:state.projects.project.projectData.Description
    }

  }
}

const mapDispatchToProps=(dispatch)=> {
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
          dispatch(fetchProjectByIdSuccess(response.value.data.objdata[0]))
        })
        .catch((error)=>{
          dispatch(fetchProjectByIdFailure(error))
        })
    }

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewProject);
