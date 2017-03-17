import {connect} from 'react-redux';
import {fectchProjectById,fetchProjectByIdSuccess,fetchProjectByIdFailure} from '.././actions/project.jsx';
import ViewProject from '.././components/viewProject.jsx';


const mapStateToProps=(state)=>{
  return{
    project:state.projects.projects
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    fectchProjectById:(projectId)=>{
      dispatch(fectchProjectById(projectId))
        .then((response)=> {
          !response.error ? dispatch(fetchProjectByIdSuccess(response.value.data.objdata)):dispatch(fetchProjectByIdFailure(response.payload.data))
        })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewProject)