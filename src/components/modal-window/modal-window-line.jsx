import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import selectVariables from '../../mock-data/select-variables';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { red100, red600 } from 'material-ui/styles/colors';

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
        style={{ margin : "0px 15px", top: "26px", width: "40%"}}
        onChange={changeType}>
        {selectItems}
      </SelectField>
      <TextField type="number"
        style={{ width: "10%", margin : "0px 15px"}}
        name={`text-${props.item.id}`}
        value={props.item.value}
        onChange={props.onChangeValue}/>
      <IconButton
        style={{ background : red100 , borderRadius : "50%", padding : "0px"}}
        iconStyle={{width:  "40px", height:  "40px"}}>
        <NavigationClose color={red600}
        onClick={()=>props.onDeleteLine(props.item.id)}/>
      </IconButton>
    </div>
  )
}

export default Line
