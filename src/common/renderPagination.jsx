import React,{Component,PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import {blue700,white} from 'material-ui/styles/colors';
import { reduxForm, Field, SubmissionError } from 'redux-form/immutable';

const style = {
  paper: {
    height: 45,
    width: 80,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    background: blue700,

  },
  arrow:{
    color:white
  }
};

 class Pagination extends Component{
  constructor(props){
    super(props)
  }

  moveNext(dispatch){
    console.log('pageInfo are ' + JSON.stringify(this.props.pageInfo));
     var aTableInfo={
        CurPage:this.props.pageInfo.CurPage,
        RPP:this.props.pageInfo.RPP,
      }
      return dispatch(this.props.pageInfo.fetchProject(aTableInfo)).
      then((response)=>{
        !response.error ? dispatch(this.props.pageInfo.fetchProjectSuccess(response.value.data.objdata)):dispatch(this.props.pageInfo.fetchProjectFailure(response.payload.data))
      })
  }

  render(){
    return(
      <div>
        <Paper style={style.paper} zDepth={5}>
         <MenuItem onTouchTap={this.moveNext.bind(this)} style={style.arrow} primaryText="Prev" />
        </Paper>
        <Paper style={style.paper} zDepth={5}>
          <MenuItem style={style.arrow} primaryText="Next" />
        </Paper>
      </div>
    )
  }
}

Pagination.proptTypes={
   pageInfo:PropTypes.object.isRequired
}

export default Pagination;


