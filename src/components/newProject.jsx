import React ,{Component,PropTypes} from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import {grey400,deepOrange500,green700,red700} from 'material-ui/styles/colors';
import PageBase from '../components/PageBase';
import { reduxForm, Field, SubmissionError , initialize } from 'redux-form';
import { renderTextField }   from '../common/renderTextField.jsx';
import { renderSelectField } from '../common/renderSelectField.jsx';
import {renderDateField} from '../common/renderDateField.jsx';
import {addProject,addProjectSuccess,addProjectFailue,asyncValidation,asyncValidateSuccess,asyncValidateFailure} from '../actions/project.jsx';
import Done from 'material-ui/svg-icons/action/done';
import Close from 'material-ui/svg-icons/navigation/close';
import moment from 'moment'
import Alert from '../common/renderAlert.jsx';
import TextField from 'material-ui/TextField';

const styles = {
  toggleDiv: {
    maxWidth: 300,
    marginTop: 40,
    marginBottom: 5
  },
  toggleLabel: {
    color: grey400,
    fontWeight: 100
  },
  buttons: {
    marginTop: 30,
    float: 'right'
  },
  saveButton: {
    marginLeft: 5
  }
};

const validate = values => {
  const errors = {}
  const requiredFields = [ 'ProjectName', 'ProjectType','StartDate','EndDate' ,'Description']
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  return errors
}

const asyncValidate=(values,dispatch)=> {
  return dispatch(asyncValidation(values.ProjectName)).then((response)=>{
        dispatch(asyncValidateSuccess(response.value.data.Count==0?false:true));
     })
    .catch((error)=>{
      dispatch(asyncValidateFailure(error));
    });
};

class NewProject extends Component{
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  renderSource(source){
   return source.map((item)=>{
     return(
       <MenuItem key={item._id} value={item.Title} primaryText={item.Title} />
     )
   })
  }

  renderNotification(success){
   let props={
     alertType:'success',
     alertIcon:<Done />,
     iconColor:green700,
     alertMsg:success,
     title:"Success"
   };
   if(success){
     return(<Alert  {...props} />);
   }
  }

  renderError(error){
    let props={
      alertType:'error',
      alertIcon:<Close />,
      iconColor:red700,
      alertMsg:"Oops! a server error occured , please try again.",
      title:"Error"
    };
    if(error){
      return(<Alert  {...props} />);
    }
  }

  renderAsyncValidationError(isExist){
    let props={
      alertType:'error',
      alertIcon:<Close />,
      iconColor:red700,
      alertMsg:"Oops! project name already exists , please try diffrent name",
      title:"Error"
    };
    if(isExist){
      return(<Alert  {...props} />);
    }
  }
  render(){
    /*const {projectTypes}=this.props.projectTypeList;
    const {success,error}=this.props.newProject;
    const {isExist}=this.props.aysncValidate;*/
    const {asyncValidating,handleSubmit,pristine, reset, submitting, invalid,project} = this.props;
     //console.log('project on form ', this.props);
    return(
      <PageBase title= "Add Project">
        <form onSubmit={ handleSubmit(this.props.onSubmit) }>
          {/*{this.renderNotification(success)}
          this.renderError(error)
          this.renderAsyncValidationError(isExist)*/}
          <Field name="ProjectName" type="text" label="Project Title" fullWidth={true} component={renderTextField} />
          {/*<TextField hintText="Project Name" name="ProjectName" value={project.ProjectName} fullWidth={true} floatingLabelText="Project Name" />*/}

          <Field name="ProjectType" label="Project Type" fullWidth={true} component={renderSelectField}>
           {this.renderSource(this.props.projectType)}
          </Field>

          <Field name="StartDate" label="Start Date" fullWidth={true} component={renderDateField} />

          <Field name="EndDate" label="End Date" fullWidth={true} component={renderDateField} />

          <Field name="Description" type="text" label="Description" fullWidth={true} component={renderTextField} />

          <div style={styles.buttons}>
            <Link to="/project">
              <RaisedButton label="Cancel"/>
            </Link>
            <RaisedButton  label="Save" style={styles.saveButton} disabled={ invalid || submitting } type="submit" primary={true}/>
          </div>
        </form>
      </PageBase>
    )
  }
}

export default  reduxForm({
  form: 'NewProject',
  validate,
  //asyncValidate
})(NewProject)

