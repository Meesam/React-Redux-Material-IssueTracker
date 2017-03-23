import React,{ Component } from 'react';
import {Link} from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {pink500, grey200, grey500,blue700} from 'material-ui/styles/colors';
import PageBase from '../common/renderPageBase.jsx';
import RenderList from '../common/renderList.jsx';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import Pagination from '../common/renderPagination.jsx';
import Divider from 'material-ui/Divider';
import {fetchProject,fetchProjectSuccess,fetchProjectFailure} from '.././actions/project.jsx';
import ProjectFilter from './projectFilteroption.jsx';
import ProjectSort from './projectSortOptions.jsx';

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

const iconList=[{name:'View'},{name:'Edit'},{name:'Delete'}];

const aTableInfo={
  CurPage:1,
  RPP:5,
  fetchProject:fetchProject(),
  fetchProjectSuccess:fetchProjectSuccess(),
  fetchProjectFailure:fetchProjectFailure()
}

class ProjectList extends Component{
  constructor(props){
    super(props)
    this.state = {
      selectedIndex: 0,
    };
  }

  componentWillMount(){
    this.props.fetchProject(aTableInfo);
  }

  /*moveNext = () => {
    Pagination.moveNext({
      CurPage:1,
      RPP:5
    })
  }*/

  makeProjectData(project) {
    var arr = []
    project.forEach(function (item) {
      var obj = {
        id: item._id,
        title: item.ProjectName,
        startdate:item.StartDate,
        enddate:item.EndDate,
        description: item.Description,
        type:item.ProjectType
      }
      arr.push(obj);
    });
    return arr;
  }

  select = (index) => this.setState({selectedIndex: index});

  render(){
    const { projects,error,loading } = this.props.projectList
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
                <ProjectFilter />
              </div>
            </div>
            <div className="row-fluid">
              <ProjectSort />
            </div>
          </div>
          <div className="col-xs-12 col-sm-10 col-md-10 col-lg-9 m-b-15 ">
            <div className="row">
              <RenderList listTitle="Project List" data={this.makeProjectData(projects)} iconList={iconList} />
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 m-b-15">
                <Pagination pageInfo={aTableInfo}  />
              </div>
            </div>
          </div>
        </div>

        </div>


        {/*<Pagination pageInfo={aTableInfo}  />*/}
      </PageBase>
    )
  }
}

export default ProjectList;
