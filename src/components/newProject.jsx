import React ,{Component,PropTypes} from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import {grey400,deepOrange500,green700,red700} from 'material-ui/styles/colors';
import PageBase from '../components/PageBase';
import { reduxForm, Field, SubmissionError } from 'redux-form/immutable';
import { renderTextField }   from '../common/renderTextField.jsx';
import { renderSelectField } from '../common/renderSelectField.jsx';
import {renderDateField} from '../common/renderDateField.jsx';
import {addProject,addProjectSuccess,addProjectFailue} from '../actions/project.jsx';
import ReactMaterialUiNotifications from '../common/renderNotification.jsx';
import Done from 'material-ui/svg-icons/action/done';
import Close from 'material-ui/svg-icons/navigation/close';
import moment from 'moment'
import Alert from '../common/renderAlert.jsx';


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

class NewProject extends Component{

  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchProjectType();
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

  validateAndSave(values,dispatch) {
    return dispatch(addProject(values)).then((response)=> {
      !response.error ? dispatch(addProjectSuccess(response.value.data.objdata)) : dispatch(addProjectFailue(response.payload.data))
     })
  }

  render(){
    const {projectTypes}=this.props.projectTypeList;
    const {success}=this.props.newProject;
    const {handleSubmit} = this.props;
    return(
      <PageBase title="Add Project">
        <form onSubmit={ handleSubmit(this.validateAndSave) }>
          {this.renderNotification(success)}
          <Field name="ProjectName" type="text" label="Project Title" fullWidth={true} component={renderTextField} />

          <Field name="ProjectType" label="Project Type" fullWidth={true} component={renderSelectField}>
            {this.renderSource(projectTypes)}
          </Field>

          <Field name="StartDate" label="Start Date" fullWidth={true} component={renderDateField} />

          <Field name="EndDate" label="End Date" fullWidth={true} component={renderDateField} />

          <Field name="Description" type="text" label="Description" fullWidth={true} component={renderTextField} />

          <div style={styles.buttons}>
            <Link to="/project">
              <RaisedButton label="Cancel"/>
            </Link>
            <RaisedButton label="Save" style={styles.saveButton} type="submit" primary={true}/>
          </div>
          <ReactMaterialUiNotifications
            desktop={true}
            transitionName={{
              leave: 'dummy',
              leaveActive: 'fadeOut',
              appear: 'dummy',
              appearActive: 'zoomInUp'
            }}
            transitionAppear={true}
            transitionLeave={true}
            maxNotifications={1}
          />
        </form>
      </PageBase>
    )
  }
}

export default  reduxForm({
  form: 'NewProject',
  validate
})(NewProject)

