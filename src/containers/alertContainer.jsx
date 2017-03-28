import {connect} from 'react-redux';
import Alert from '../common/renderAlert.jsx';
import {openAlert,closeAlert} from '../actions/alert.jsx'

const mapStateToProps=(state)=>{
  return {
    alert:state.alert
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    openAlert:()=>{
      dispatch(openAlert());
    },
    closeAlert:()=>{
      dispatch(closeAlert());
    }
  }
}
