import React,{PropTypes,Component} from 'react';
import PageBase from './renderPageBase.jsx';
import { renderSelectField } from './renderSelectField.jsx';
import {renderTextField} from './renderTextField.jsx';
import { reduxForm, Field, SubmissionError } from 'redux-form/immutable';
import MenuItem from 'material-ui/MenuItem';
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

class RenderSearch extends Component{
  constructor(props){
    super(props)
    this.renderSearchField=this.renderSearchField.bind(this);
    this.renderSource=this.renderSource.bind(this);
  }

  renderSource(source){
    return source.map((item)=>{
      return(
        <MenuItem key={item._id} value={item.Title} primaryText={item.Title} />
      )
    })
  }

  renderSearchField(searchOption){
    return searchOption.map((item)=>{
       if(item.type==='text'){
         return(
           <div key={item.name}>
             <Field name={item.name} type="text" label={item.label} fullWidth={true} component={renderTextField} />
           </div>
         )
       }
       if(item.type==='selectField'){
         return(
           <div key={item.name}>
             <Field name={item.name} label={item.label} fullWidth={true} component={renderSelectField}>
               {this.renderSource(item.source())}
             </Field>
           </div>
         )
       }
    })
  }

  render(){
    const {handleSubmit} = this.props;
    return(
      <PageBase title="Filters">
        <form onSubmit={handleSubmit(this.props.onSearch)}>
          {this.renderSearchField(this.props.searchOption)}
          <div style={styles.buttons}>
            <RaisedButton label="Search" style={styles.saveButton} type="submit" primary={true}/>
          </div>
        </form>
      </PageBase>
    )
  }
}

RenderSearch.propTypes={
  searchOption:PropTypes.array.isRequired,
  onSearch:PropTypes.func.isRequired
}
export default  reduxForm({
  form: 'RenderSearch'
})(RenderSearch)