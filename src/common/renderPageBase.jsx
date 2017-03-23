import React, {PropTypes,Component} from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import globalStyles from '../styles';

class PageBase extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const {title, navigation} = this.props;
    return(
      <div>
        <span style={globalStyles.navigation}>{navigation}</span>

        <Paper style={globalStyles.paper} zDepth={3}>
          <h3 style={globalStyles.title}>{title}</h3>

          <Divider/>
          {this.props.children}

          <div style={globalStyles.clear}/>

        </Paper>
      </div>
    )
  }
}

PageBase.propTypes={
  title: PropTypes.string.isRequired,
  navigation: PropTypes.string,
  children: PropTypes.element
}

export default PageBase;