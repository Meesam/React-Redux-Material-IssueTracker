import React, {PropTypes,Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {grey400} from 'material-ui/styles/colors';


const items = [];
for (let i = 0; i < 100; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
}

class RightIconMenu extends Component{
  constructor(props){
    super(props)
  }

  render(){
   return(
     <IconMenu
         iconButtonElement={<IconButton><MoreVertIcon color={grey400} /></IconButton>}
         anchorOrigin={{horizontal: 'left', vertical: 'top'}}
         targetOrigin={{horizontal: 'left', vertical: 'top'}}
       >
     <MenuItem primaryText="View"></MenuItem>
     <MenuItem primaryText="Edit"></MenuItem>
     <MenuItem primaryText="Delete"></MenuItem>
     </IconMenu>
   )
  }
}
RightIconMenu.proptype={
  menuTitles:PropTypes.array.isRequired
}

export default RightIconMenu;