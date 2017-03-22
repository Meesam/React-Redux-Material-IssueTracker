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
import PageBase from '../components/PageBase';


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
    width:500,
    height:200
  },
    listItemStyle : {
    padding:'20px 8px 0 72px',
    height:180
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
      <PageBase title="Project List">
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
                primaryText={item.title}
                secondaryText={item.text}
                secondaryTextLines={item.text}
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
            </List>
          </Paper>)}
        </div>
      </PageBase>


      /*<Paper>
        <List>
          {/!*<Subheader style={styles.subheader}>{this.props.listTitle}</Subheader>*!/}
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
      </Paper>*/
    )
  }
}

RenderList.propTypes = {
  data: PropTypes.array.isRequired,
  listTitle:PropTypes.string.isRequired,
  iconList:PropTypes.array.isRequired,
};

export default RenderList;
