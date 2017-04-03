import React,{Component,PropTypes, cloneElement} from 'react';
import Done from 'material-ui/svg-icons/action/done';
import Close from 'material-ui/svg-icons/navigation/close';
import {grey600,green700,white,red700} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';

class EditableInput extends Component{
  constructor(props){
    super(props)
    this.state={
      isEdit:false,
      value:this.props.text
    }
    this.changeView=this.changeView.bind(this)
    this.onTextChange=this.onTextChange.bind(this);
    this.setValue=this.setValue.bind(this);
  }

  changeView(){
    this.setState({
      isEdit:this.state.isEdit ? false:true
    })
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
      <div style={leftIconBodyStyle}>
        {leftIcon}
      </div>
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
      <div style={leftIconBodyStyle}>
        {leftIcon}
      </div>
    return iconEl;
  }

  onTextChange(event){
     this.setState({
        value:event.target.value
     })
  }

  setValue(){
    this.setState({
      value:this.state.value
    })
  }

  render(){
    if(this.state.isEdit){
      return (
      <div>
        <div className="row-fluid">
          <TextField name={this.props.name} value={this.state.value} floatingLabelText={this.props.label} hintText={this.props.label} onChange={this.onTextChange} onBlur={this.changeView} />
        </div>
        <div className="row-fluid">
          {this.getDoneIcon()} {this.getCloseIcon()}
        </div>
      </div>
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
