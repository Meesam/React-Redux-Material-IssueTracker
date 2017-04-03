import React,{ Component } from 'react';
import {Link} from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {pink500, grey200, grey500,blue700,red700} from 'material-ui/styles/colors';
import PageBase from '../common/renderPageBase.jsx';
import RenderIssueList from '../components/renderIssueList.jsx';
import Pagination from '../common/renderPagination.jsx';
import ProjectSort from './projectSortOptions.jsx';
import moment from 'moment';
import { reduxForm, Field, SubmissionError } from 'redux-form/immutable';
import {searchProject,searchProjectSuccess,searchProjectFailure} from '../actions/project.jsx';
import RenderSearch from '../common/renderSearchField.jsx';
import CircularProgress from 'material-ui/CircularProgress';
import Close from 'material-ui/svg-icons/navigation/close';
import Alert from '../common/renderAlert.jsx';
import { Spinner } from 'react-redux-spinner';
import IssueDetail from '../components/renderIssueDetails.jsx';


const styles = {
  floatingActionButton: {
    margin: 0,
    top: 'auto',
    right: 50,
    bottom: 80,
    left: 'auto',
    position: 'fixed',
  },
  editButton: {
    fill: grey500
  },
  columns: {
    id: {
      width: '10%'
    },
    name: {
      width: '40%'
    },
    price: {
      width: '20%'
    },
    category: {
      width: '20%'
    },
    edit: {
      width: '10%'
    }
  },
  container:{
    position: 'fixed',
    zIndex: '999',
    height: '2em',
    width: '2em',
    overflow: 'show',
    margin: 'auto',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
};

const aTableInfo={
  CurPage:1,
  RPP:5,
}

const searchIssue=(values,dispatch)=>{
  return dispatch(searchProject(values)).
  then((response)=>{
    dispatch(searchProjectSuccess(response.value.data.objdata))
  })
    .catch((error)=>{
      dispatch(searchProjectFailure(error))
    })
}

class IssueList extends Component{
  constructor(props){
    super(props)
    this.moveNext=this.moveNext.bind(this);
    this.movePrev=this.movePrev.bind(this);
    this.onIssueSelect=this.onIssueSelect.bind(this);
  }

  componentWillMount(){
    this.props.fetchIssues(aTableInfo);
  }

  moveNext(){
    let pageInfo={
      CurPage:this.props.issuesList.curPage + 1,
      RPP:5,
    }
    this.props.fetchIssues(pageInfo);
  }

  movePrev(){
    let pageInfo={
      CurPage:this.props.issuesList.curPage - 1,
      RPP:5,
    }
    this.props.fetchIssues(pageInfo);
  }

  searchOption=[
    {
      type:'text',
      label:'Issue Title',
      name:'Issue Title'
    }
  ];

  makeIssueData(issue) {
    var arr = []
    if(issue){
      issue.forEach(function (item) {
        var obj = {
          id: item._id,
          title: item.IssueTitle,
          startdate:moment(item.StartDate).format('MMM D , YYYY'),
          enddate:item.EndDate,
          description: item.Description,
          type:item.IssueType
        }
        arr.push(obj);
      });
    }
    return arr;
  }

  renderError(error){
    let props={
      alertType:'error',
      alertIcon:<Close />,
      iconColor:red700,
      alertMsg:"Oops! a server error occured , please try again.",
      title:"Error"
    };
    if(error){
      return(<Alert  {...props} />);
    }
  }

  onIssueSelect(id){
    if(id){
      this.props.fetchIssueById(id);
    }
  }

  renderIssueDetail(issueDetail){
    if(issueDetail){
      return (<IssueDetail issueData={issueDetail} />)
    } else {
      return(<span></span>)
    }
  }

  render(){
    const { issues,error,loading,curPage } = this.props.issuesList;
    const {issueDetails}=this.props;
    return(
      <PageBase title="Issue List">
        <div>
          <Link to="/newissue" >
            <FloatingActionButton style={styles.floatingActionButton}  iconStyle={{backgroundColor: blue700}}>
              <ContentAdd />
            </FloatingActionButton>
          </Link>
          <div className="row">
            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-3 m-b-15 ">
              <div className="row">
                <div className="col-xs-12 col-sm-5 col-md-5 col-lg-12 m-b-15">
                  <RenderIssueList listTitle="Issue List" data={this.makeIssueData(issues)} onSelect={this.onIssueSelect} />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-10 col-md-10 col-lg-9 m-b-15 ">
              <div className="row">
                {this.renderIssueDetail(issueDetails)}
              </div>
{/*              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 m-b-15">
                  <Pagination pageInfo={aTableInfo} moveNext={this.moveNext} movePrev={this.movePrev}  />
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </PageBase>
    )
  }
}

export default IssueList;
