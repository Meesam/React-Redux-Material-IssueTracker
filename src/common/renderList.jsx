import React, {PropTypes,Component} from 'react';
import Link from 'react-router';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {grey400, cyan600, white} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';
import Wallpaper from 'material-ui/svg-icons/device/wallpaper';
import RenderIconMenu from './rightIconMenu.jsx';

const styles = {
  subheader: {
    fontSize: 24,
    fontWeight: typography.fontWeightLight,
    backgroundColor: cyan600,
    color: white
  }
};

const iconButtonElement = (
    <IconButton
      touch={true}
      tooltipPosition="bottom-left"
    >
      <MoreVertIcon color={cyan600}/>
    </IconButton>
)

const rightIconMenu =(
 <IconMenu iconButtonElement={iconButtonElement}
           anchorOrigin={{horizontal: 'right', vertical: 'top'}}
           targetOrigin={{horizontal: 'right', vertical: 'top'}}
 >
   <MenuItem href="/project/1" primaryText="View" />
   <MenuItem href="/project/1" primaryText="Edit" />
   <MenuItem href="/project/1" primaryText="Delete" />
 </IconMenu>
)

class RenderList extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Paper>
        <List>
          <Subheader style={styles.subheader}>{this.props.listTitle}</Subheader>
          {this.props.data.map(item =>
            <div key={item.id}>
              <ListItem
                leftAvatar={<Avatar icon={<Wallpaper />} />}
                primaryText={item.title}
                secondaryText={item.text}
                rightIconButton={rightIconMenu}
              />
              <Divider inset={true} />
            </div>
          )}
        </List>
      </Paper>
    )
  }
}

RenderList.propTypes = {
  data: PropTypes.array.isRequired,
  listTitle:PropTypes.string.isRequired,
  iconList:PropTypes.array.isRequired,
};

export default RenderList;
