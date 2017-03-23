import React,  { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import {spacing, typography} from 'material-ui/styles';
import {white, blue600} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';
import Avatar from 'material-ui/Avatar';
import ActionLabel from 'material-ui/svg-icons/action/label';
import {red500, green500, orange500,fullWhite} from 'material-ui/styles/colors';

const styles = {
  logo: {
    cursor: 'pointer',
    fontSize: 22,
    color: typography.textFullWhite,
    lineHeight: `${spacing.desktopKeylineIncrement}px`,
    fontWeight: typography.fontWeightLight,
    backgroundColor: blue600,
    paddingLeft: 40,
    height: 56,
  },
  menuItem: {
    color: white,
    fontSize: 14
  },
  avatar: {
    div: {
      padding: '15px 0 20px 15px',
      backgroundImage:  'url(' + require('../images/material_bg.png') + ')',
      height: 45
    },
    icon: {
      float: 'left',
      display: 'block',
      marginRight: 15,
      boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
    },
    span: {
      paddingTop: 12,
      display: 'block',
      color: 'white',
      fontWeight: 300,
      textShadow: '1px 1px #444'
    }
  }
};

class LeftDrawer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
   /* <ActionLabel color={orange500} />*/
    return(
      <Drawer
        docked={true}
        open={this.props.navDrawerOpen}>
        <div style={styles.logo}>
          Issue Tracker
        </div>
        <div style={styles.avatar.div}>
          <Avatar src="https://s-media-cache-ak0.pinimg.com/236x/e2/28/b3/e228b3b55721db68685163e603d123b0.jpg"
                  size={50}
                  style={styles.avatar.icon}/>
          <span style={styles.avatar.span}>Meesam</span>
        </div>
        <div>
          {this.props.menus.map((menu, index) =>
            <MenuItem
              key={index}
              style={styles.menuItem}
              primaryText={menu.MenuName}
              leftIcon={<ActionLabel color={fullWhite} />}
              containerElement={<Link to={menu.MenuRoute}/>}
            />
          )}
        </div>
      </Drawer>
    );
  }
}

LeftDrawer.propTypes={
  menus:PropTypes.array,
  navDrawerOpen:PropTypes.bool
}
export default LeftDrawer;
