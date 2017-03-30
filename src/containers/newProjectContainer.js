import React,{PropTypes,Component} from 'react';
import {connect} from 'react-redux';
import {fectchProjectById,fetchProjectByIdSuccess,fetchProjectByIdFailure ,fetchProjectType,fetchProjectTypeSuccess,fetchProjectTypeFailure,
 addProject,addProjectSuccess,addProjectFailue,asyncValidation,asyncValidateSuccess,asyncValidateFailure} from '../actions/project.jsx';
import NewProject from '../components/newProject.jsx';

class ProjectContainer extends Component{
  constructor(props){
    super(props)
    this.validateAndSave = this.validateAndSave.bind(this);
    this.state={
      project:Object.assign({},this.props.project),
      error:{}
    }
  }

  componentWillMount() {
    this.props.fetchProjectType();
  }

  componentWillReceiveProps(nextProps){
    if(this.props.project._id !=nextProps.project._id){
      this.setState({project:Object.assign({},nextProps.project)})
    }
  }

  validateAndSave(values,dispatch) {
    return dispatch(addProject(values)).
    then((response)=> {
      dispatch(addProjectSuccess(response.value.data.objdata));
      //this.props.dispatch(initialize('NewProject', {}));
    })
    .catch((error)=>{
      dispatch(addProjectFailue(error))
    })
  }

  render(){
    const {projectTypes}=this.props.projectTypeList;
    return(
      <NewProject projectType={projectTypes} onSubmit={this.validateAndSave} project={this.state.project} error={this.state.error} />
    )
  }

}

function getProjectById(projects,Id) {
  const project=projects.filter(project=>project._id==Id);
  if(project)
    return project[0];
  else
    return null;
}

function mapStateToProps(state,ownProps) {
  let project={_id:'',ProjectName:'',ProjectType:'',StartDate:'',EndDate:'',Description:''};
  if(ownProps.id){
    //project=getProjectById(state.projects.projectList.projects,ownProps.id);
    project=fectchProjectById(ownProps.id);
  }
  return{
    projectList:state.projects.projectList,
    projectTypeList:state.projects.projectTypeList,
    newProject:state.projects.newProject,
    aysncValidate:state.projects.aysncValidate,
    projectId:ownProps.id,
    project:project,

  }
}

function mapDispatchToProps(dispatch) {
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
          dispatch(fetchProjectByIdSuccess(response.value.data.objdata))
        })
        .catch((error)=>{
          dispatch(fetchProjectByIdFailure(error))
        })
    }

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProjectContainer);
