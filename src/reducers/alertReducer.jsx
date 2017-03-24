import {ALERT_CLOSE,ALERT_OPEN} from '../actions/alert.jsx';

const INITIAL_STATE={
  alert:{isOpen:false}
}

export default function (state=INITIAL_STATE,action) {
  switch (action.type){
    case ALERT_OPEN:
      return {...state, alert:{isOpen:true}}

    case ALERT_CLOSE:
     return {...state, alert:{isOpen:false}};

    default:
      return state;
  }
}
