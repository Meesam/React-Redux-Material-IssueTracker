import React ,{Component} from 'react';
import NewProjectContainer from '../containers/newProjectContainer';

export default class NewProjectIndex extends Component{
  render(){
    return(<NewProjectContainer id={this.props.params.Id} />);
  }
}
