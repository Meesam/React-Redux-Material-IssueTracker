import React,{PropTypes,Component} from 'react';
import {Router,Route, RouteHandler, Link} from  'react-router';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {grey500, white,red500} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';


const styles = {
  loginContainer: {
    minWidth: 320,
    maxWidth: 400,
    height: 'auto',
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    margin: 'auto'
  },
  paper: {
    padding: 20,
    overflow: 'auto'
  },
  buttonsDiv: {
    textAlign: 'center',
    padding: 10
  },
  flatButton: {
    grey500
  },
  checkRemember: {
    style: {
      float: 'left',
      maxWidth: 180,
      paddingTop: 5
    },
    labelStyle: {
      color: grey500
    },
    iconStyle: {
      color: grey500,
      borderColor: grey500,
      fill: grey500
    }
  },
  loginBtn: {
    float: 'right'
  },
  btn: {
    background: '#4f81e9',
    color: white,
    padding: 7,
    borderRadius: 2,
    margin: 2,
    fontSize: 13
  },
  btnFacebook: {
    background: '#4f81e9'
  },
  btnGoogle: {
    background: '#e14441',
    color:white
  },
  btnSpan: {
    marginLeft: 5
  },
};
class ViewProject extends Component{
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props){
    super(props)
  }

 componentDidMount(){
    this.props.fectchProjectById(this.props.projectId);
  }

  render(){
    const {project}=this.props.project
   return(
     <Paper zDepth={4}>
       <Card>
         <CardHeader
           title={project[0].ProjectName}
           subtitle={project[0].ProjectType}
           actAsExpander={true}
           showExpandableButton={true}
         />
         <CardText expandable={true}>
           {project[0].Description}
         </CardText>
         <CardActions>
           <RaisedButton label="Edit" primary={true} type="submit" />
           <FlatButton
             label="Cancel"
             href="/project"
             style={styles.flatButton}
           />
         </CardActions>
       </Card>
     </Paper>
    )
  }
}

export default ViewProject;