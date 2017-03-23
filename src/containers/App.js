import {connect} from 'react-redux';
import {fetchModules,fetchModulesSuccess,fetchModulesFailure,openNavDrawer} from '.././actions/modules.jsx';
import AppContainer from '.././components/App.jsx';

const mapStateToProps=(state)=>{
  return{
    moduleList:state.modules.moduleList
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    fetchModules:()=>{
      dispatch(fetchModules()).then((response)=>{
        !response.error?dispatch(fetchModulesSuccess(response.value.data.objdata)):dispatch(fetchModulesFailure(response.payload.data))
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);