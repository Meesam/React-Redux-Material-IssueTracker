import React ,{Component,PropTypes} from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import {grey400,deepOrange500,green700} from 'material-ui/styles/colors';
import PageBase from '../components/PageBase';
import { reduxForm, Field, SubmissionError } from 'redux-form/immutable';
import { renderTextField }   from '../common/renderTextField.jsx';
import { renderSelectField } from '../common/renderSelectField.jsx';
import {renderDateField} from '../common/renderDateField.jsx';
import {newUsers,newUsersSuccess,newUsersFailue} from '../actions/users.jsx';
import RefreshIndicator from 'material-ui/RefreshIndicator';


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
  },
  container: {
    position: 'relative',
    textAlign:'center'
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};


class NewUser extends Component{

  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props){
    super(props);
  }

  validateAndSave(values,dispatch) {
    console.log('users values are ' + JSON.stringify(values));
    return dispatch(newUsers(values)).
    then((response)=>{
      debugger;
      !response.error ? dispatch(newUsersSuccess(response.value.data.objdata)):dispatch(newUsersFailue(response.payload.data))
    })
  };

  renderSource(){
    let source=[{_id:1,Title:'Male'},{_id:2,Title:'Female'}]
    return source.map((item)=>{
      return(
        <MenuItem key={item._id} value={item.Title} primaryText={item.Title} />
      )
    })
  }

  render(){

    const {success,error,loading}=this.props.newUser;
    const {handleSubmit} = this.props;
    if(loading){
      console.log('i am here');
      return(
        <div style={styles.container}>
          <RefreshIndicator
            size={50}
            left={70}
            top={0}
            loadingColor="#FF9800"
            status="loading"
            style={styles.refresh}
          />
        </div>
      )
    }
    return(
      <PageBase title="Add User">
        <form onSubmit={handleSubmit(this.validateAndSave)}>
          <Field name="FirstName" type="text" label="First Name" fullWidth={true} component={renderTextField} />
          <Field name="LastName" type="text" label="Last Name" fullWidth={true} component={renderTextField} />
          <Field name="Gender" label="Gender" fullWidth={true} component={renderSelectField}>
            {this.renderSource()}
          </Field>
          <Field name="Email" type="text" label="Email" fullWidth={true} component={renderTextField} />
          <Field name="UserName" type="text" label="User Name" fullWidth={true} component={renderTextField} />
          <Field name="DOB" label="Dob" fullWidth={true} component={renderDateField} />
          <div style={styles.buttons}>
            <Link to="/users">
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
  form: 'NewUser'
})(NewUser)

