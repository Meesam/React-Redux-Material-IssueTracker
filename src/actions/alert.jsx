import axios from 'axios';
import URL from '../../appconfig';

export const ALERT_OPEN="ALERT_OPEN";
export const ALERT_CLOSE="ALERT_CLOSE";

export function openAlert() {
  return{
    type:ALERT_OPEN
  }
}

export function closeAlert() {
  return{
    type:ALERT_CLOSE
  }
}
