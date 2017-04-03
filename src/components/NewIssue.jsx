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
import {addIssue,addIssueSuccess,addIssueFailure} from '../actions/issues.jsx';
import Done from 'material-ui/svg-icons/action/done';
import Close from 'material-ui/svg-icons/navigation/close';
import moment from 'moment'
import Alert from '../common/renderAlert.jsx';
import {ListItem ,List}from 'material-ui/List';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';

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

class NewIssue extends Component{
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.validateAndSave=this.validateAndSave.bind(this)
  }

  componentWillMount() {
    this.props.fetchProject();
  }

  renderSprint(){
    let source=[{_id:1,Title:'Sprint 1'},{_id:2,Title:'Sprint 2'},{_id:3,Title:'Sprint 3'}]
    return source.map((item)=>{
      return(
        <MenuItem key={item._id} value={item.Title} primaryText={item.Title} />
      )
    })
  }

  renderIssueType(){
    let source=[{_id:1,Title:'Bug'},{_id:2,Title:'Story'},{_id:3,Title:'Task'}]
    return source.map((item)=>{
      return(
        <MenuItem key={item._id} value={item.Title} primaryText={item.Title} />
      )
    })
  }

  renderPriority(){
    let source=[{_id:1,Title:'High'},{_id:2,Title:'Medium'},{_id:3,Title:'Low'}]
    return source.map((item)=>{
      return(
        <MenuItem key={item._id} value={item.Title} primaryText={item.Title} />
      )
    })
  }

  renderProject(source){
    return source.map((item)=>{
      return(
        <MenuItem key={item._id} value={item._id} primaryText={item.ProjectName} />
      )
    })
  }

  renderNotification(success){
    if(success===200){
      let props={
        alertType:'success',
        alertIcon:<Done />,
        iconColor:green700,
        alertMsg:"Record added successfully",
        title:"Success"
      };
      if(success){
        return(<Alert  {...props} />);
      }
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

  validateAndSave(values,dispatch) {
    if(!this.props.issueId){
      return dispatch(addIssue(values)).
      then((response)=> {
        dispatch(addIssueSuccess(response.value.status));
        this.props.dispatch(initialize('NewIssue',{}));
      })
        .catch((error)=>{
          dispatch(addIssueFailure(error))
        })
    }
    else {
      console.log('values are ' ,values);
    }

  }
  render(){
    const {success,error}=this.props.newIssue;
    const { projects} = this.props.projectList;
    const {asyncValidating,handleSubmit,pristine, reset, submitting, invalid} = this.props;
    return(
      <PageBase title= {this.props.issueId?"Edit Issue":"Add Issue"}>
        <form onSubmit={ handleSubmit(this.validateAndSave) }>
          {this.renderNotification(success)}
          {this.renderError(error)}

          <Field name="Project" label="Project" fullWidth={true} component={renderSelectField}>
            {this.renderProject(projects)}
          </Field>

          <Field name="IssueTitle" type="text" label="Issue Title" fullWidth={true} component={renderTextField} />

          <Field name="IssueType" label="Issue Type" fullWidth={true} component={renderSelectField}>
            {this.renderIssueType()}
          </Field>

          <Field name="Priority" label="Priority" fullWidth={true} component={renderSelectField}>
            {this.renderPriority()}
          </Field>

          <Field name="StartDate" label="Start Date" fullWidth={true} component={renderDateField} />

          <Field name="Sprint" label="Sprint" fullWidth={true} component={renderSelectField}>
            {this.renderSprint()}
          </Field>

          <Field name="Lable" type="text" label="Lable" fullWidth={true} component={renderTextField} />

          <Field name="Description" type="text" label="Description" fullWidth={true} component={renderTextField} />

          <div style={styles.buttons}>
            <Link to="/issues">
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
  form: 'NewIssue',
  fields:['_id','IssueTitle','IssueType','Priority','StartDate','Sprint','Lable','Description'],
  validate
})(NewIssue)

