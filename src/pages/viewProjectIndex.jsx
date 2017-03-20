import React,{Component,PropTypes} from 'react'
import ViewProject from '.././containers/viewprojectContainer'

export default class ViewProjectIndex extends Component{
  static contextTypes = {
    router: PropTypes.object
  };

  render(){
    return(
      <div>
        <ViewProject id={this.props.params.Id} />
      </div>
    )
  }
}