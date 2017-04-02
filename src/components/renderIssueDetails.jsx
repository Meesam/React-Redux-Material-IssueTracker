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
import globalStyles from '../styles';
import Subheader from 'material-ui/Subheader';
import IssueActivity from './renderIssueActivity.jsx';
import IssueAttachments from './renderIssueAttachment.jsx';

const styles = {
  paper:{
    textAlign: 'left',
    borderRadius: 3,
    margin: '10px auto',
    width:900,
    height:'auto',
    padding:25
  },
  listItemStyle : {
    padding:'0 10px 10px 20px',
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
  },
  text: {
  display:'inline-block',
  marginLeft: 5
 }

};

class IssueDetails extends Component{

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

  render(){
    const {issueData}=this.props;
    console.log('issueData ' , issueData);
    return(
      <Paper
        key={issueData._id}
        style={styles.paper}
        zDepth={5}
        transitionEnabled={false}
      >
          <div className="row">
            <div className="col-md-12 none">
              <div className="well none">
                <Avatar
                  icon={this.renderIcons(issueData.IssueType)}
                  color={white}
                  backgroundColor={this.renderBackgroundColour(issueData.IssueType)}
                  size={30}
                  style={styles.avatarIcon}
                />
                <div style={styles.text}>
                  {<h3 style={globalStyles.title}>{issueData.IssueTitle}</h3>}</div>
                </div>
               <Divider />
              <Subheader>Issue Details</Subheader>
               <div className="row-fluid">
                 <div className="col-md-12">
                  <span style={globalStyles.label}>IssueType</span> : {issueData.IssueType} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                   <span style={globalStyles.label}>Priority</span> : {issueData.Priority} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                   <span style={globalStyles.label}>Lables</span> : {issueData.Lable} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                   <span style={globalStyles.label}>Sprint</span> : {issueData.Sprint} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                   <span style={globalStyles.label}>Project</span> : {issueData.Project}
                 </div>
               </div>
              <br />
              <div className="row-fluid">
                <div className="col-md-12">
                  <span style={globalStyles.label}>Status</span> : In Progress &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <span style={globalStyles.label}>Resolution</span> : Un Resolved &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <span style={globalStyles.label}>Reporter</span> : Meesam &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <span style={globalStyles.label}>Assignee</span> : Meesam &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <span style={globalStyles.label}>Watchers</span> : (0)
                </div>
              </div>
              </div>
            </div>
         <Divider />
         <Subheader>Description</Subheader>
          <div className="row-fluid" style={styles.listItemStyle}>
            {issueData.Description}
          </div>
        <Divider />
        <Subheader>Attachments</Subheader>
         <div className="row-fluid">
           <IssueAttachments />
         </div>
        <Divider />
        <Subheader>Activity</Subheader>
        <div className="row-fluid">
          <IssueActivity />
        </div>
      </Paper>
    );
  }
}

IssueDetails.propTypes={
  issueData:PropTypes.object.isRequired
}
//issueData
export default IssueDetails ;
