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
  },
  container:{
    position:'relative',
    bottom:390,
    left:360
  }
};

 class Pagination extends Component{
  constructor(props){
    super(props)
    this.moveNext=this.moveNext.bind(this);
    this.movePrev=this.movePrev.bind(this);
  }

  moveNext(){
    this.props.moveNext();
  }

  movePrev(){
    this.props.movePrev();
  }

  render(){
    return(
      <div style={style.container}>
        <Paper style={style.paper} zDepth={5}>
         <MenuItem onTouchTap={this.movePrev} style={style.arrow} primaryText="Prev" />
        </Paper>
        <Paper style={style.paper} zDepth={5}>
          <MenuItem onTouchTap={this.moveNext} style={style.arrow} primaryText="Next" />
        </Paper>
      </div>
    )
  }
}

Pagination.proptTypes={
   pageInfo:PropTypes.object.isRequired,
   moveNext:PropTypes.func.isRequired,
   movePrev:PropTypes.func.isRequired
}

export default Pagination;


