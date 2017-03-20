import React,{ Component } from 'react';
import {Link} from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {pink500, grey200, grey500,blue700} from 'material-ui/styles/colors';
import PageBase from '../components/PageBase';
import RenderList from '../common/renderList.jsx';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

const styles = {
  floatingActionButton: {
    margin: 0,
    top: 'auto',
    right: 20,
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

class ProjectList extends Component{
  constructor(props){
    super(props)
    this.state = {
      selectedIndex: 0,
    };
  }

  componentWillMount(){
    this.props.fetchProject();
  }

  makeProjectData(project) {
    var arr = []
    project.forEach(function (item) {
      var obj = {
        id: item._id,
        title: item.ProjectName,
        text: item.Description
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
      <div>
        <Link to="/form" >
          <FloatingActionButton style={styles.floatingActionButton}  iconStyle={{backgroundColor: blue700}}>
            <ContentAdd />
          </FloatingActionButton>
        </Link>
        <Tabs>
          <Tab
            icon={<FontIcon className="material-icons">List View</FontIcon>}
          />
          <Tab
            icon={<FontIcon className="material-icons">Tiles View</FontIcon>}
          />
        </Tabs>

         <RenderList listTitle="Project List" data={this.makeProjectData(projects)} iconList={iconList} />
      </div>
    )
  }
}

export default ProjectList;
