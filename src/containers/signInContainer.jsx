import React ,{ Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginPage from '../components/LoginPage';
import {onInitialState} from '../actions/login.jsx'


const mapStateToProps=(state, ownProps)=> {
  return {
    user: state.user,
    userInfo:state.user.userInfo
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    resetMe: () =>{
    },
    onInitialState:()=>{
      dispatch(onInitialState());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);