import React,{Component,PropTypes,cloneElement} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Paper from 'material-ui/Paper';
import {typography} from 'material-ui/styles';
import {grey600,green700,white} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import Done from 'material-ui/svg-icons/action/done';
import Close from 'material-ui/svg-icons/navigation/close';

const styles={
  container:{
    display: 'block',
    textAlign: 'left',
    borderRadius: 3,
    margin: '12px auto'
  },
  title: {
    fontSize: 24,
    fontWeight: typography.fontWeightLight,
    marginBottom: 20
  },
  paper: {
    padding: '15px 20px 40px 30px',
    hight:'auto',
    width:500
  },
  clear: {
    clear: 'both'
  },
    iconButtonStyle :{
    width: 36,
    height: 36,
    top: -3,
    right: 4,
    padding: 6
  },

  iconStyle :{
    height: 18,
    width: 18
  },

  listItemStyle :{
    padding:'8px 8px 0 72px'
  },

  listStyle :{
    position: 'relative'
  },

  overflowStyle :{
    padding: '12px 0 12px 72px'
  },

  overflowContentStyle :{
    paddingLeft: 72
  },

  secondaryTextStyle :{
    marginTop: 8,
    marginBottom: 8
  }
}

class Alert extends Component{
  constructor(props) {
    super(props)
  }

  getNotificationIcon(){
    let iconEl;
    let leftIconBodyStyle;
    let leftIcon;
     leftIconBodyStyle = {
        height: 32,
        width: 32,
        top: 4,
        padding: 6,
        margin: 0,
        left: 8,
        borderRadius: '50%',
        backgroundColor: green700,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
      },
      leftIcon = cloneElement(<Done />, {
        color: white,
        style: {
          margin: 0
        }
      })
    iconEl =
      <div style={leftIconBodyStyle}>
        {leftIcon}
      </div>
    return iconEl;

  }

  onCloseNotification = () => {
    console.log('close are call');
  }

  render(){
    return(
      <ReactCSSTransitionGroup
        transitionName={{
          leave: 'dummy',
          leaveActive: 'fadeOut',
          appear: 'dummy',
          appearActive: 'zoomInUp'
        }}
        transitionAppear={true}
        transitionEnter={true}
        transitionLeave={true}
        transitionAppearTimeout={0}
        transitionEnterTimeout={0}
        transitionLeaveTimeout={0}
      >
        <div style={styles.container}>
          <Paper style={styles.paper} zDepth={5}>
            <h3 style={styles.title}>Success</h3>
            <Divider/>
            <div>
              <List style={styles.listStyle}>
                <ListItem
                  primaryText="Record added successfully !"
                  secondaryText=""
                  leftIcon={this.getNotificationIcon()}
                  insetChildren={true}
                  rightIconButton={<IconButton
                    style={styles.iconButtonStyle}
                    iconStyle={styles.iconStyle}
                    onTouchTap={this.onCloseNotification}
                  >
                    <Close />
                  </IconButton>}
                  innerDivStyle={styles.listItemStyle}
                />
              </List>
            </div>
            <div style={styles.clear}/>
          </Paper>
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}

export default Alert;
