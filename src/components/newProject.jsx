import React ,{Component,PropTypes} from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import {grey400} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import PageBase from '../components/PageBase';
import { reduxForm, Field, SubmissionError } from 'redux-form/immutable';
import { renderTextField }   from '../common/renderTextField.jsx';
import { renderSelectField } from '../common/renderSelectField.jsx';
import {renderDateField} from '../common/renderDateField.jsx';
import {addProject,addProjectSuccess,addProjectFailue} from '../actions/project.jsx';
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

class NewProject extends Component{
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.fetchProjectType();
  }

  renderSource(source){
   return source.map((item)=>{
     return(
       <MenuItem key={item._id} value={item._id} primaryText={item.Title} />
     )
   })
  }

  validateAndSave(values,dispatch) {
    return dispatch(addProject(values)).
    then((response)=>{
       console.log('response are ' + JSON.stringify(response.value));
      !response.error ? dispatch(addProjectSuccess(response.value.data.objdata)):dispatch(addProjectFailue(response.payload.data))
    })
  };

  render(){
    const {projectTypes}=this.props.projectTypeList;
    const {success}=this.props.newProject;
    const {handleSubmit} = this.props;
    console.log('newProject are ' + JSON.stringify(success));

    return(
      <PageBase title="Add Project">
        <form onSubmit={ handleSubmit(this.validateAndSave) }>
          <Field name="ProjectName" type="text" label="Project Title" fullWidth={true} component={renderTextField} />

          <Field name="ProjectType" label="Project Type" fullWidth={true} component={renderSelectField}>
            {this.renderSource(projectTypes)}
          </Field>

          <Field name="StartDate" label="Start Date" fullWidth={true} component={renderDateField} />

          <Field name="EndDate" label="End Date" fullWidth={true} component={renderDateField} />

          <Field name="Description" type="text" label="Description" fullWidth={true} component={renderTextField} />

          <Divider/>

          <div style={styles.buttons}>
            <Link to="/">
              <RaisedButton label="Cancel"/>
            </Link>
            <RaisedButton label="Save" style={styles.saveButton} type="submit" primary={true}/>
          </div>
        </form>
      </PageBase>
    )
  }
}

export default  reduxForm({
  form: 'NewProject'
})(NewProject)

