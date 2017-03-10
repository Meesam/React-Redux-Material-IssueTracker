import React,{Component} from 'react';
import AppContainer from '.././containers/App.js';

export default class AppIndex extends Component{
  render(){
    return(
      <AppContainer>
        {this.props.children}
      </AppContainer>
    );
  }
}