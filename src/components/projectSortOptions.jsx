import React,{ Component } from 'react';
import PageBase from '../common/renderPageBase.jsx';
import { renderSelectField } from '../common/renderSelectField.jsx';
import { reduxForm, Field, SubmissionError } from 'redux-form/immutable';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';

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
  },
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
  },
};

function handleTouchTap() {
  alert('You clicked the Chip.');
}

const submitForm=(values,dispatch)=>{
  console.log('submit values are ' + JSON.stringify(values));
}

class ProjectSort extends Component{
  constructor(props){
    super(props)
  }

  renderSource(){
    let source=[{_id:1,Title:'Title'},{_id:2,Title:'Type'},{_id:3,Title:'Start Date'}]
    return source.map((item)=>{
      return(
        <MenuItem key={item._id} value={item._id} primaryText={item.Title} />
      )
    })
  }

  render(){
    const {handleSubmit} = this.props;
    return(
      <PageBase title="Sort By">
        <div>
          <div className="row-fluid">
            <form onSubmit={handleSubmit(submitForm)}>
              <Field name="sortby" label="Sort By" fullWidth={true} component={renderSelectField}>
                {this.renderSource()}
              </Field>
              <div style={styles.block}>
                <Toggle
                  label="Asc"
                  style={styles.toggle}
                />
              </div>
              <div style={styles.buttons}>
                <RaisedButton label="Sort" style={styles.saveButton} type="submit" primary={true}/>
              </div>
            </form>
          </div>
        </div>
      </PageBase>
    )
  }
}

export default  reduxForm({
  form: 'ProjectSort'
})(ProjectSort)