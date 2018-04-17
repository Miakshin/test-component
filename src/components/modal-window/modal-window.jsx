import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { grey200 , grey900 , red100, red600} from 'material-ui/styles/colors';

class ModalWindow extends Component {
  state = {
    open: true,
  };

  render() {
    return (
      <Dialog open = { this.state.open } >
        <AppBar
          style={{ background :  grey200 }}
          title={<span style={{color : grey900}}>Структура номеров</span>}
          iconElementRight={
            <IconButton>
              <NavigationClose color={grey900} />
            </IconButton>}
          iconElementLeft = {<div></div>}/>
        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          maxHeight={200}
          style={{ margin : "0px 15px", top: "26px", width: "40%"}}>
          <MenuItem value={1} key={1} primaryText= "first" />
          <MenuItem value={2} key={2} primaryText= "second" />
          <MenuItem value={3} key={3} primaryText= "theart" />
        </SelectField>
        <TextField type="number" style={{ width: "10%", margin : "0px 15px"}}/>
        <FloatingActionButton mini={ true } style={{background : red100 }} >
          <NavigationClose color={ red600 } />
        </FloatingActionButton>

        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          maxHeight={200}
          style={{ margin : "0px 15px", top: "26px", width: "40%"}}>
          <MenuItem value={1} key={1} primaryText= "first" />
          <MenuItem value={2} key={2} primaryText= "second" />
          <MenuItem value={3} key={3} primaryText= "theart" />
        </SelectField>
        <TextField type="number" style={{ width: "10%", margin : "0px 15px"}}/>
        <FloatingActionButton mini={ true } style={{background : red100 }} >
          <NavigationClose color={ red600 } />
        </FloatingActionButton>

        <br/><FlatButton label="Добавить" primary={true} style={{margin: "15px 0px"}}/>
        <footer style={{margin: "15px"}}>
          <RaisedButton label="Сохранить" primary={true} />
          <FlatButton label="Отмена" default={true} />
        </footer>
      </Dialog>
    );
  }
}

export default ModalWindow;
