import React,{PropTypes,Component} from 'react';
import {connect} from 'react-redux';
import { reduxForm, Field, SubmissionError , initialize , change } from 'redux-form';
import {fectchProjectById,fetchProjectByIdSuccess,fetchProjectByIdFailure ,fetchProjectType,fetchProjectTypeSuccess,fetchProjectTypeFailure,
 addProject,addProjectSuccess,addProjectFailue,asyncValidation,asyncValidateSuccess,asyncValidateFailure} from '../actions/project.jsx';
import NewProject from '../components/newProject.jsx';

class ProjectContainer extends Component{
  constructor(props){
    super(props)
    this.validateAndSave = this.validateAndSave.bind(this);
  }

  componentWillMount() {
    this.props.fetchProjectType();
  }

  componentDidMount(){
    if(this.props.projectId){
      this.props.fectchProjectById(this.props.projectId)
    }
  }

  componentWillReceiveProps(nextProps){

    /*if(nextProps.id){
      let obj=nextProps.initialValues;
      if(obj._id!=""){
        this.props.initialValues=nextProps.initialValues;
      }
    }/!* else {
      this.setState={
        initialprojectValues:{_id:'',ProjectName:'',ProjectType:'',StartDate:'',EndDate:'',Description:''}
      }
    }*!/*/
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
      <NewProject projectType={projectTypes} onSubmit={this.validateAndSave} project={this.props.initialValues} />
    )
  }

}

function mapStateToProps(state,ownProps) {
  return{
    projectList:state.projects.projectList,
    projectTypeList:state.projects.projectTypeList,
    newProject:state.projects.newProject,
    aysncValidate:state.projects.aysncValidate,
    projectId:ownProps.id,
    initialValues:state.projects.project.projectData[0]
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
