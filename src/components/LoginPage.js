import React ,{ Component,PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
//import Checkbox from 'material-ui/Checkbox';
import {grey500, white} from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
//import TextField from 'material-ui/TextField';
import {Link} from 'react-router';
import ThemeDefault from '../theme-default';
import {onLogin} from '../actions/login.jsx';
import { reduxForm, Field, SubmissionError } from 'redux-form/immutable';
import { renderTextField }   from '../common/renderTextField.jsx';

const styles = {
  loginContainer: {
    minWidth: 320,
    maxWidth: 400,
    height: 'auto',
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    margin: 'auto'
  },
  paper: {
    padding: 20,
    overflow: 'auto'
  },
  buttonsDiv: {
    textAlign: 'center',
    padding: 10
  },
  flatButton: {
    color: grey500
  },
  checkRemember: {
    style: {
      float: 'left',
      maxWidth: 180,
      paddingTop: 5
    },
    labelStyle: {
      color: grey500
    },
    iconStyle: {
      color: grey500,
      borderColor: grey500,
      fill: grey500
    }
  },
  loginBtn: {
    float: 'right'
  },
  btn: {
    background: '#4f81e9',
    color: white,
    padding: 7,
    borderRadius: 2,
    margin: 2,
    fontSize: 13
  },
  btnFacebook: {
    background: '#4f81e9'
  },
  btnGoogle: {
    background: '#e14441'
  },
  btnSpan: {
    marginLeft: 5
  },
};

function validate(values) {

  var errors = {};
  var hasErrors = false;
  if (!values.username || values.username.trim() === '') {
    errors.username = 'Enter username';
    hasErrors = true;
  }
  if (!values.password || values.password.trim() === '') {
    errors.password = 'Enter password';
    hasErrors = true;
  }
  return hasErrors && errors;
}

//const

class LoginPage extends Component {
  static contextTypes = {
    router: PropTypes.object
  };


  validateAndSignInUser(formData, dispatch) {
    console.log('values ' + JSON.stringify(formData));
    /*return dispatch(onLogin(values))
     .then((result) => {
     if (result.payload.response && result.payload.response.status !== 200) {
     dispatch(onLoginFailure(result.payload.response.data));
     throw new SubmissionError(result.payload.response.data);
     }
     localStorage.setItem('jwtToken', result.payload.data.token);
     dispatch(onLoginSuccess(result.payload.data.objdata));
     });*/
  };




  render() {
    //const { userInfo } = this.props.user;
    const {asyncValidating, handleSubmit, submitting} = this.props;
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <div style={styles.loginContainer}>
            <Paper style={styles.paper}>
              <form onSubmit={ handleSubmit(this.validateAndSignInUser.bind(this)) }>
                <div>
                  <Field name="username" type="text" label="User Name" component={renderTextField} />
                  <Field name="password" type="password" label="Password" component={renderTextField} />
                </div>
                <div>
                  <RaisedButton label="Login" primary={true} style={styles.loginBtn} disabled={submitting} type="submit" />
                </div>
              </form>
            </Paper>
            <div style={styles.buttonsDiv}>
              <FlatButton
                label="Register"
                href="/"
                style={styles.flatButton}
                icon={<PersonAdd />}
              />

              <FlatButton
                label="Forgot Password?"
                href="/"
                style={styles.flatButton}
                icon={<Help />}
              />
            </div>

            <div style={styles.buttonsDiv}>
              <Link to="/" style={{...styles.btn, ...styles.btnFacebook}}>
                <i className="fa fa-facebook fa-lg"/>
                <span style={styles.btnSpan}>Log in with Facebook</span>
              </Link>
              <Link to="/" style={{...styles.btn, ...styles.btnGoogle}}>
                <i className="fa fa-google-plus fa-lg"/>
                <span style={styles.btnSpan}>Log in with Google</span>
              </Link>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default  reduxForm({
  form: 'LoginPage'
})(LoginPage)


