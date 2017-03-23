import React ,{ PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {RenderSelectSource} from '../common/renderSelectSource.jsx';

export const renderSelectField = ({ input, label, meta: { touched, error }, children ,...custom }) => (

  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    fullWidth={custom.fullWidth}
    children={children} />
)

renderSelectField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object,
}
