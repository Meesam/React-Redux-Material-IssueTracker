import React,{Component} from 'react';
import AppContainer from '.././components/App.jsx';

export default class AppIndex extends Component{
  render(){
    return(
      <AppContainer>
        {this.props.children}
      </AppContainer>
    );
  }
}