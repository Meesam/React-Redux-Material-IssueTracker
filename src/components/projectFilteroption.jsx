import React,{ Component } from 'react';
import PageBase from '../common/renderPageBase.jsx';
import { renderSelectField } from '../common/renderSelectField.jsx';
import {renderTextField} from '../common/renderTextField.jsx';
import { reduxForm, Field, SubmissionError } from 'redux-form/immutable';
import MenuItem from 'material-ui/MenuItem';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  buttons: {
    marginTop: 30,
    float: 'right'
  },
  saveButton: {
    marginLeft: 5
  }
};

function handleTouchTap() {
  alert('You clicked the Chip.');
}


const submitForm=(values,dispatch)=>{
  console.log('submit values are ' + JSON.stringify(values));
}

class ProjectFilter extends Component{
  constructor(props){
    super(props)
  }

  renderSource(){
    let source=[{_id:1,Title:'Internal'},{_id:2,Title:'External'}]
    return source.map((item)=>{
      return(
        <MenuItem key={item._id} value={item._id} primaryText={item.Title} />
      )
    })
  }

  render(){
    const {handleSubmit} = this.props;
    return(
      <PageBase title="Filters">
          <form onSubmit={handleSubmit(submitForm)}>
            <Field name="ProjectName" type="text" label="Project Title" fullWidth={true} component={renderTextField} />
            <Field name="ProjectType" label="Project Type" fullWidth={true} component={renderSelectField}>
              {this.renderSource()}
            </Field>
            <div style={styles.buttons}>
              <RaisedButton label="Search" style={styles.saveButton} type="submit" primary={true}/>
            </div>
          </form>
      </PageBase>
    )
  }

}

export default  reduxForm({
  form: 'ProjectFilter'
})(ProjectFilter)