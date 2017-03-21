import React,{Component} from 'react';
import AppContainer from '.././containers/App.js';
import Paper from 'material-ui/Paper';
import { Notifs } from 'redux-notifications';


const styles = {
  paper: {
    padding: 10,
    background: '#E0F2F1',
  }
}
export default class AppIndex extends Component{
  render(){
    return(
      <AppContainer>
        <Paper style={styles.paper} zDepth={5}>
          {this.props.children}
          <Notifs />
        </Paper>

      </AppContainer>
    );
  }
}
