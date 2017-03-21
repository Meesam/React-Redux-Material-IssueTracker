import React ,{Component,PropTypes} from 'react';
import MenuItem from 'material-ui/MenuItem';

class RenderSelectSource extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
    <div>
      <MenuItem value={0} primaryText="Internal"/>
      <MenuItem value={1} primaryText="External"/>
    </div>

    )
  }
}

export default RenderSelectSource;