import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {grey400, cyan600, white} from 'material-ui/styles/colors';

class RenderButtonElement extends Component{
  render(){
    return(
      <div>
        <IconButton
          touch={true}
          tooltipPosition="bottom-left"
        >
        <MoreVertIcon color={grey400}/>
        </IconButton>
      </div>
    );
  }
}

export default RenderButtonElement