/**
 * Created by administrator on 24/3/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {newUsers,newUsersSuccess,newUsersFailue} from '../actions/users.jsx';
import NewUser from '../components/newUser.jsx';

const mapStateToProps=(state)=>{
  return{
    newUser:state.systemUser.newUser
  };
}

const mapDispatchToProps=(dispatch)=>{
  return{};
}

export default connect(mapStateToProps,mapDispatchToProps)(NewUser);


