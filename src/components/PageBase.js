import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import globalStyles from '../styles';
import lodash from 'lodash';

const PageBase = (props) => {

    const {title, navigation} = props;

   /* const arr=[{fileType:1 ,FileId:1,ParenId:0},{fileType:1 ,FileId:2,ParenId:0},
      {fileType:3 ,FileId:3,ParenId:0},{fileType:3 ,FileId:4,ParenId:0},{fileType:3 ,FileId:5,ParenId:2},
      {fileType:4 ,FileId:6,ParenId:3},{fileType:4 ,FileId:7,ParenId:3},{fileType:4 ,FileId:8,ParenId:4}]*/

    return (
      <div>
        <span style={globalStyles.navigation}>{navigation}</span>

        <Paper style={globalStyles.paper}>
          <h3 style={globalStyles.title}>{title}</h3>

          <Divider/>
          {props.children}

          <div style={globalStyles.clear}/>

        </Paper>
      </div>
    );
};

PageBase.propTypes = {
  title: PropTypes.string,
  navigation: PropTypes.string,
  children: PropTypes.element
};

export default PageBase;
