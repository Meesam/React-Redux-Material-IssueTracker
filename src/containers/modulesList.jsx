import {connect} from 'react-redux';
import {fetchModules,fetchModulesSuccess,fetchModulesFailure} from '.././actions/modules.jsx';
import LeftDrawer from '.././components/LeftDrawer';

const  mapStateToProps=(state)=>{
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

export default connect(mapStateToProps, mapDispatchToProps)(LeftDrawer);
