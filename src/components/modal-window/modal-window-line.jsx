import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import selectVariables from '../../mock-data/select-variables';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { red600 } from 'material-ui/styles/colors';

import styles from './styles.js'

const Line = (props) => {

  function changeType (event, i, value){
    props.onChangeType(props.item.id, value)
  }

  const selectItems = selectVariables.map((sVar , i ) => {
    return(
      <MenuItem value={ sVar } key={i} primaryText ={ sVar } insetChildren={true} />
    )
  })

  return (
    <div key={props.item.id}>
      <SelectField
        value={props.item.type}
        maxHeight={200}
        hintText="Select a type"
        name={`select-${props.item.id}`}
        style={styles.select}
        onChange={changeType}>
        {selectItems}
      </SelectField>
      <TextField type="number"
        style={styles.numberField}
        name={`text-${props.item.id}`}
        value={props.item.value}
        onChange={props.onChangeValue}/>
      <IconButton
        style={ styles.buttonOuter }
        iconStyle={ styles.buttonIner }>
        <NavigationClose color={red600}
        onClick={()=>props.onDeleteLine(props.item.id)}/>
      </IconButton>
    </div>
  )
}

Line.propTypes = {
  item:PropTypes.object.isRequired,
  onChangeType:PropTypes.func.isRequired,
  onChangeValue:PropTypes.func.isRequired,
  onDeleteLine:PropTypes.func.isRequired,
}

export default Line
