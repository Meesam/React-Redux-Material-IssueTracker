import React,{ Component } from 'react';
import {Link} from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {pink500, grey200, grey500,blue700} from 'material-ui/styles/colors';
import PageBase from '../common/renderPageBase.jsx';
import RenderList from '../common/renderList.jsx';
import Pagination from '../common/renderPagination.jsx';
import ProjectSort from './projectSortOptions.jsx';
import moment from 'moment';
import { reduxForm, Field, SubmissionError } from 'redux-form/immutable';
import {searchProject,searchProjectSuccess,searchProjectFailure} from '../actions/project.jsx';
import RenderSearch from '../common/renderSearchField.jsx';


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
  }
};

const aTableInfo={
  CurPage:1,
  RPP:5,
}

const searchProjects=(values,dispatch)=>{
  return dispatch(searchProject(values)).
  then((response)=>{
    !response.error ? dispatch(searchProjectSuccess(response.value.data.objdata)):dispatch(searchProjectFailure(response.payload.data))
  })
}

class ProjectList extends Component{
  constructor(props){
    super(props)
    this.moveNext=this.moveNext.bind(this);
    this.movePrev=this.movePrev.bind(this);
    this.renderSource=this.renderSource.bind(this);
  }

  componentWillMount(){
    this.props.fetchProject(aTableInfo);
  }

  moveNext(){
    let pageInfo={
      CurPage:this.props.projectList.curPage + 1,
      RPP:5,
    }
    this.props.fetchProject(pageInfo);
  }

  movePrev(){
    let pageInfo={
      CurPage:this.props.projectList.curPage - 1,
      RPP:5,
    }
    this.props.fetchProject(pageInfo);
  }

  renderSource(){
    return [{_id:1,Title:'Internal'},{_id:2,Title:'External'}]
  }

  searchOption=[
    {
      type:'text',
      label:'Project Title',
      name:'ProjectName'
    },
    {
      type:'selectField',
      label:'Project Type',
      name:'ProjectType',
      source:this.renderSource
    }
  ];

  makeProjectData(project) {
    var arr = []
    project.forEach(function (item) {
      var obj = {
        id: item._id,
        title: item.ProjectName,
        startdate:moment(item.StartDate).format('MMM D , YYYY'),
        enddate:item.EndDate,
        description: item.Description,
        type:item.ProjectType
      }
      arr.push(obj);
    });
    return arr;
  }

  render(){
    const { projects,error,loading,curPage } = this.props.projectList
    if(loading){
      return <div className="alert-info">Wait projects are loading</div>
    }
    else if(error){
      return <div className="alert-error">${error.message}</div>
    }
    return(
      <PageBase title="Project List">
        <div>
        <Link to="/newproject" >
          <FloatingActionButton style={styles.floatingActionButton}  iconStyle={{backgroundColor: blue700}}>
            <ContentAdd />
          </FloatingActionButton>
        </Link>
        <div className="row">
          <div className="col-xs-12 col-sm-5 col-md-5 col-lg-3 m-b-15 ">
            <div className="row">
              <div className="col-xs-12 col-sm-5 col-md-5 col-lg-12 m-b-15 ">
                <RenderSearch searchOption={this.searchOption} onSearch={searchProjects} />
              </div>
            </div>
            <div className="row-fluid">
              <ProjectSort />
            </div>
          </div>
          <div className="col-xs-12 col-sm-10 col-md-10 col-lg-9 m-b-15 ">
            <div className="row">
              <RenderList listTitle="Project List" data={this.makeProjectData(projects)} />
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 m-b-15">
                <Pagination pageInfo={aTableInfo} moveNext={this.moveNext} movePrev={this.movePrev}  />
              </div>
            </div>
          </div>
        </div>
        </div>
      </PageBase>
    )
  }
}

export default ProjectList;
