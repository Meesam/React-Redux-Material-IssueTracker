import {connect} from 'react-redux';
import {fetchUsers,fetchUsersSuccess,fetchUsersFailure}  from  '../actions/users.jsx' ;
import UserList from '.././components/UserList.jsx';

const mapStateToProps = (state)=> {
  return {
    userList:state.systemUser.userList
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    fetchUsers:()=>{
      dispatch(fetchUsers()).then((response)=>{
        !response.error ? dispatch(fetchUsersSuccess(response.value.data.objdata)):dispatch(fetchUsersFailure(response.payload.data))
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
