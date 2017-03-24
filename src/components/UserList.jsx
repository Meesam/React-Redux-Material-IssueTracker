import React,{ Component } from 'react';
import {Link} from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {pink500, grey200, grey500,blue700} from 'material-ui/styles/colors';
import PageBase from '../common/renderPageBase.jsx';
import RenderUserList from '../common/renderUserList.jsx';
import Pagination from '../common/renderPagination.jsx';
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

const aTableInfo={
  CurPage:1,
  RPP:5
}

class UserList extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount(){
    this.props.fetchUsers();
  }

  makeUserData(users) {
    var arr = []
    users.forEach(function (item) {
      var obj = {
        id: item._id,
        firstname: item.FirstName,
        email:item.email,
      }
      arr.push(obj);
    });
    return arr;
  }

  render() {
    const { users,error,loading } = this.props.userList
    if(loading){
      return <div className="alert-info">Wait users are loading</div>
    }
    else if(error){
      return <div className="alert-error">${error.message}</div>
    }
    return (
      <PageBase title="Users List">
        <div>
          <Link to="/newuser" >
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
                <RenderUserList listTitle="User List" data={this.makeUserData(users)} />
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

export default UserList;
