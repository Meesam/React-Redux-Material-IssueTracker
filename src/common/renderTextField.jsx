import React ,{ PropTypes, Component } from 'react';
import TextField from 'material-ui/TextField';


export const renderTextField = ({input, label,meta: {touched, error}, ...custom}) => (
<div>
  <TextField hintText={label} floatingLabelText={label} errorText={touched && error}
             {...input}
             {...custom}
  />
</div>

)
 renderTextField.propTypes = {
 input: PropTypes.object,
 label: PropTypes.string.isRequired,
 meta: PropTypes.object
 }


