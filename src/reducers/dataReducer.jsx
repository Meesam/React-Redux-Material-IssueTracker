import {FETCH_DATA,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE} from '.././actions/data.jsx';

const INITIAL_STATE={
  dataList:{data:[],error:null,loading:false}
}

export default function (state=INITIAL_STATE,action) {
  let error;

  switch(action.type){

    case FETCH_DATA:
      return{...state,dataList:{data:[],error:null,loading:true}}

    case FETCH_DATA_SUCCESS:
      return{...state,dataList:{data:action.payload,error:null,loading:false}}

    case FETCH_DATA_FAILURE:
      error = action.payload || {message: action.payload.message};
      return{...state,dataList:{data:[],error:error,loading:false}}

    default :
      return state;
  }
}