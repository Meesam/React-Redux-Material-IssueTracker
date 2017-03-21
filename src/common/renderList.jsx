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
import {grey400, cyan600, white,blue600} from 'material-ui/styles/colors';
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

class RenderList extends Component{
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props){
    super(props);
  }

 _handleTouchTap(id) {
   this.context.router.push('/project/'+id);
 }

  render(){
    return(
      <Paper>
        <List>
          {/*<Subheader style={styles.subheader}>{this.props.listTitle}</Subheader>*/}
          {this.props.data.map(item =>
            <div key={item.id}>
              <ListItem
                leftAvatar={<Avatar icon={<Wallpaper />} />}
                primaryText={item.title}
                secondaryText={item.text}
                id={item.id}
                onTouchTap={this._handleTouchTap.bind(this, item.id)}
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
