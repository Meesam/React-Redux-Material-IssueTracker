import React,{ Component } from 'react';
import PageBase from '../common/renderPageBase.jsx';
import globalStyles from '../styles';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import {white, blue800} from 'material-ui/styles/colors';

const styles = {
  paper:{
    textAlign: 'left',
    borderRadius: 3,
    margin: '10px auto',
    width:1000,
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

class NotFoundPage extends Component{
  render(){
    return(
       <Paper
         style={styles.paper}
         zDepth={5}
         transitionEnabled={true}
       >
         <List style={styles.listStyle}>
           <ListItem
             primaryText={<h3 style={globalStyles.title}>Page Not Found</h3>}
             leftAvatar={
               <Avatar
                 color={white}
                 backgroundColor={blue800}
                 size={50}
                 style={styles.avatar}
               >
                 {"Page Not Found".charAt(0).toUpperCase()}
               </Avatar>
             }
             insetChildren={true}
             innerDivStyle={styles.listItemStyle}
           />
         </List>
       </Paper>
    )
  }
}

export default NotFoundPage;