import React ,{ PropTypes } from 'react';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';


export const renderDateField = ({input, label, meta: {touched, error}, ...custom}) => (
  <DatePicker
    hintText={label}
    floatingLabelText={label}
    fullWidth={custom.fullWidth} errorText={touched && error}
    selected={input.value ? moment(input.value) : null}
    onChange={(e, val) => {return input.onChange(val)}}
    {...custom}
  />)

renderDateField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object,
}

