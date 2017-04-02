import React, {PropTypes,Component} from 'react';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import {grey900, cyan600, white,blue600,
  purple500,red600} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';
import Divider from 'material-ui/Divider';
import BookMark from 'material-ui/svg-icons/action/bookmark';
import Assignment from 'material-ui/svg-icons/action/assignment-late';
import LightBulb from 'material-ui/svg-icons/action/lightbulb-outline';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

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
    width:400,
    height:'auto',
    padding:25
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
    marginLeft:5,
    height:1200
  },
  overflowStyle :{
    padding: '15px 0 0 72px'
  },

  innerflowStyle :{
    padding: '0 0 0 0'
  },
  iconStyles:{
    marginRight: 24,
  },
  avatarIcon:{
    margin: 0
  },

  title:{
    color:grey900
  }

};


class RenderIssueList extends Component{
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props){
    super(props);
    this.state = {
      value: 4,
    };
    this.onSelect=this.onSelect.bind(this);
  }
  renderIcons(type){
    switch(type){
      case "Task":
        return (<BookMark />);

      case "Bug":
        return (<LightBulb />);

      case "Story":
        return (<Assignment />);
    }
  }

  renderBackgroundColour(type){
    switch(type){
      case "Task":
        return purple500;

      case "Bug":
        return red600;

      case "Story":
        return blue600;
    }
  }

  onSelect(id,event){
    event.preventDefault();
    this.props.onSelect(id);
  }

  handleChange = (event, index, value) => this.setState({value});

  renderToolBar(){
    return(
      <Toolbar>
          <ToolbarGroup firstChild={true}>
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={1} primaryText="All Issue" />
              <MenuItem value={2} primaryText="Open Issue" />
              <MenuItem value={3} primaryText="Close Issue" />
              <MenuItem value={4} primaryText="My Issue" />
            </DropDownMenu>
          </ToolbarGroup>
       </Toolbar>
    )
  }

  render(){
    return(
      <div style={styles.maindiv}>
        <br />
        {this.renderToolBar()}
        {this.props.data.map(item =>
          <Paper
            key={item.id}
            style={styles.paper}
            zDepth={5}
            transitionEnabled={false}
          >
            <div style={styles.innerflowStyle}>
              <div className="row-fluid">
                <Avatar
                  icon={this.renderIcons(item.type)}
                  color={white}
                  backgroundColor={this.renderBackgroundColour(item.type)}
                  size={30}
                  style={styles.avatarIcon}
                /> <a style={styles.title} href="" value={item.id} onClick={(event)=>this.onSelect(item.id,event)}>{item.title}</a>
              </div>
              <div className="row-fluid">
                {item.type}
              </div>
            </div>
          </Paper>)}
      </div>
    )
  }
}

RenderIssueList.propTypes = {
  data: PropTypes.array.isRequired,
  listTitle:PropTypes.string.isRequired,
  onSelect:PropTypes.func.isRequired
};

export default RenderIssueList;
