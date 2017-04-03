import React,{Component,PropTypes, cloneElement} from 'react';
import Done from 'material-ui/svg-icons/action/done';
import Close from 'material-ui/svg-icons/navigation/close';
import {grey600,green700,white,red700} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';

const styles={
  span:{
    textAlign:'left'
  }
}

class EditableInput extends Component{
  constructor(props){
    super(props)
    this.state={
      isEdit:false,
      value:this.props.text,
      hasError:false,
      error:""
    }
    this.changeView=this.changeView.bind(this)
    this.onTextChange=this.onTextChange.bind(this);
    this.setValue=this.setValue.bind(this);
  }

  changeView(){
    debugger;
    if(this.state.hasError){
      this.setState({
        isEdit:true,
        hasError:true
      })
    }else {
      this.setState({
        isEdit:this.state.isEdit ? false:true,
        hasError:false
      })
    }

  }

  getDoneIcon(){
    let iconEl;
    let leftIconBodyStyle;
    let leftIcon;
    leftIconBodyStyle = {
      height: 15,
      width: 15,
      top: 4,
      padding: 6,
      margin: 0,
      left: 8,
      borderRadius: '50%',
      backgroundColor: green700,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      cursor:'pointer'
    },
      leftIcon = cloneElement(<Done onClick={this.setValue}/>, {
        color: white,
        style: {
          margin: 0
        }
      })
    iconEl =
      <span style={leftIconBodyStyle}>
        {leftIcon}
      </span>
    return iconEl;
  }

  getCloseIcon(){
    let iconEl;
    let leftIconBodyStyle;
    let leftIcon;
    leftIconBodyStyle = {
      height: 15,
      width: 15,
      padding: 6,
      margin: 0,
      left: 18,
      borderRadius: '50%',
      backgroundColor: red700,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      marginLeft: '33px',
      marginTop: '-27px',
      cursor:'pointer'
    },
    leftIcon = cloneElement(<Close onClick={this.changeView}/>, {
      color: white,
      style: {
        margin: 0
      }
    })
    iconEl =
      <span style={leftIconBodyStyle}>
        {leftIcon}
      </span>
    return iconEl;
  }

  onTextChange(event){
    if(event.target.value==""){
      this.setState({
        error:"Value Required",
        hasError:true
      })
    }else {
      this.setState({
        value:event.target.value,
        hasError:false
      })
    }
  }
  setValue(){
    this.setState({
      value:this.state.value
    })
  }

  render(){
    if(this.state.isEdit){
      return (
      <span>
        <span>
          <TextField name={this.props.name} value={this.state.value} errorText={this.state.error} hintText={this.props.label} onChange={this.onTextChange} onBlur={this.changeView} />
        </span>
      </span>
      )
    } else {
      return (
        <span onClick={this.changeView}>{this.state.value}</span>
      )
    }
  }
}

EditableInput.propTypes={
  text:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  label:PropTypes.string.isRequired,
}

export default  EditableInput;
