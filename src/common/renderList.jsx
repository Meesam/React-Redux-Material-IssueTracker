import React, {PropTypes,Component} from 'react';
import Link from 'react-router';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import {grey400, cyan600, white,blue600,blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,blue800} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';
import Wallpaper from 'material-ui/svg-icons/device/wallpaper';
import FontIcon from 'material-ui/FontIcon';
import PageBase from '../common/renderPageBase.jsx';
import globalStyles from '../styles';
import Divider from 'material-ui/Divider';


const styles = {
  subheader: {
    fontSize: 24,
    fontWeight: typography.fontWeightLight,
    backgroundColor: cyan600,
    color: white
  },
  paper:{
    textAlign: 'left',
    borderRadius: 3,
    margin: '10px auto',
    width:1000,
    height:'auto'
  },
    listItemStyle : {
    padding:'20px 8px 0 72px',
    height:70
  },

  listStyle : {

  },
  avatar:{
    margin: 0
  },
  maindiv:{
    float:'left',
    marginLeft:30,
    height:1200
  },
  overflowStyle :{
    padding: '15px 0 0 72px'
  },

  innerflowStyle :{
    padding: '0 0 0 0'
  },

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

  expandedText(text){
  return (
    <div style={styles.overflowStyle}>
      <div className="row-fluid">
        {text}
      </div>
    </div>)
}


  render(){
    return(
        <div style={styles.maindiv}>
        {this.props.data.map(item =>
          <Paper
            key={item.id}
            style={styles.paper}
            zDepth={5}
            transitionEnabled={false}
          >
           <List style={styles.listStyle}>
              <ListItem
                primaryText={<h3 style={globalStyles.title}>{item.title}</h3>}
                secondaryText={
                  <div style={styles.innerflowStyle}>
                    <div className="row-fluid">
                      {item.type}
                    </div>
                    <div className="row-fluid">
                      Start at : {item.startdate}
                    </div>
                  </div>
                }
                secondaryTextLines={2}
                leftAvatar={
                  <Avatar
                    color={white}
                    backgroundColor={blue800}
                    size={50}
                    style={styles.avatar}
                  >
                    {item.title.charAt(0).toUpperCase()}
                  </Avatar>
                }
                insetChildren={true}
                innerDivStyle={styles.listItemStyle}
                onTouchTap={this._handleTouchTap.bind(this, item.id)}
              />
             {this.expandedText(item.description)}
            </List>
          </Paper>)}
        </div>
    )
  }
}

RenderList.propTypes = {
  data: PropTypes.array.isRequired,
  listTitle:PropTypes.string.isRequired,
};

export default RenderList;
